/**
 * @param {string} s
 * @return {string[]}
 */
function collectChars(s) {
  const chars = s.split("")
  const collect = { chars: [], mid: "" }
  const map = new Map()

  // count each chars
  for (let i = 0; i < chars.length; i++) {
    if (map.has(chars[i])) {
      map.set(chars[i], map.get(chars[i]) + 1)
    } else {
      map.set(chars[i], 1)
    }
  }

    
  for (let entry of map.entries()) {
    while (entry[1] > 1) {
      collect.chars.push(entry[0])
      entry[1] -= 2
    }

    if (entry[1] === 1) {
      if (collect.mid !== "") {
        return null
      } else {
        collect.mid = entry[0]
      }
    }
  }

  return collect
}

function createPalindrom(chars, cur, result) {
  if (chars.length === 0) {
    result.push(cur)
    return
  }

  for (let i = 0; i < chars.length; i++) {
    if (i !== 0 && chars[i] === chars[i - 1]) {
      continue
    }

    const copy = chars.slice()
    const char = copy.splice(i, 1)[0]
    createPalindrom(copy, char + cur + char, result)
  }
}

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  if (!s || typeof s !== "string") {
    return []
  }

  // collect chars
  const collection = collectChars(s)

  if (!collection) {
    return []
  }

  // create
  const result = []
  createPalindrom(collection.chars, collection.mid, result)
  return result
}