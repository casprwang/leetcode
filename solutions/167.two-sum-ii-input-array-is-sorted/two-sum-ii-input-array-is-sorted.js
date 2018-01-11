/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let set = new Set()

  for (let i = 0; i < numbers.length; i++) {
    if (set.has(numbers[i])) {
      return [i+1, numbers.indexOf(target - numbers[i])+1].sort((a,b)=>a-b)
    }

    set.add(target - numbers[i])
  }
}