/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  let pointer = digits.length - 1
  let carrier = 0
  digits[digits.length - 1] += 1

  while (pointer >= 0) {
    digits[pointer] += carrier

    if (digits[pointer] > 9) {
      digits[pointer] = 0
      carrier = 1
      pointer--
    } else {
      carrier = 0
      break
    }
  }

  if (carrier) {
    digits.unshift(1)
  }

  return digits
}
