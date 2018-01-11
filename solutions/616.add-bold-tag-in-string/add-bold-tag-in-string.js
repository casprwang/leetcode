/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
const addBoldTag = (s, dict) => {
  let bold = new Array(s.length).fill(false)

  let end = 0
  for (let i = 0; i < s.length; i++) {
    for (let word of dict) {
      if (s.startsWith(word, i)) {
        end = Math.max(end, i + word.length)
      }
    }

    bold[i] = end > i
  }

  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (bold[i] === false) {
      res += s[i]
      continue
    }

    let j = i
    let bolded = ''
    while (bold[j] === true && j < s.length) {
      bolded += s[j]
      j++
    }

    res += `<b>${bolded}</b>`
    i = j - 1
  }

  return res
}