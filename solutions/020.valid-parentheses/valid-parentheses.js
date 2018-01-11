/**
 * @param {string} s
 * @return {boolean}
 */
const map = new Map([
  [')', '('],
  [']', '['],
  ['}', '{'],
])

const isValid = n => {
  if (n.length === 0) return true

  let stack = []
  for (let i = 0; i < n.length; i++) {
    let item = n[i]
    if (stack.length === 0) {
      stack.push(item)
      continue
    }

    if (stack[stack.length - 1] === map.get(item)) {
      stack.pop()
      continue
    }

    stack.push(item)
  }

  return stack.length === 0
}

