/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = candies => {
  let set = new Set(candies)
  if(set.size > candies.length/2) return candies.length/2
  return set.size
}
