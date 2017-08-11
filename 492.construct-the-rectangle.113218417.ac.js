/*
 * [492] Construct the Rectangle
 *
 * https://leetcode.com/problems/construct-the-rectangle
 *
 * algorithms
 * Easy (48.60%)
 * Total Accepted:    22.6K
 * Total Submissions: 46.4K
 * Testcase Example:  '1'
 *
 * 
 * For a web developer, it is very important to know how to design a web page's
 * size. So, given a specific rectangular web page’s area, your job by now is
 * to design a rectangular web page, whose length L and width W satisfy the
 * following requirements:
 * 1. The area of the rectangular web page you designed must equal to the given
 * target area.
 * 2. The width W should not be larger than the length L, which means L >= W.
 * 3. The difference between length L and width W should be as small as
 * possible.
 * 
 * You need to output the length L and the width W of the web page you designed
 * in sequence.
 * 
 * 
 * 
 * Example:
 * 
 * Input: 4
 * Output: [2, 2]
 * Explanation: The target area is 4, and all the possible ways to construct it
 * are [1,4], [2,2], [4,1]. 
 * But according to requirement 2, [1,4] is illegal; according to requirement
 * 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the
 * width W is 2.
 * 
 * 
 * 
 * Note:
 * 
 * The given area won't exceed 10,000,000 and is a positive integer
 * The web page's width and length you designed must be positive integers.
 * 
 * 
 */
/**
 * @param {number} area
 * @return {number[]}
 */

const constructRectangle = area => findClosestPair(getPossibles(area))

const getPossibles = area => {
  let pairSet = new Set()
  for (let i = 1; i <= parseInt(Math.sqrt(area)); i += 1) {
    if (Number.isInteger(area / i)) {
      pairSet.add([area / i, i])
    }
  }
  return [...pairSet]
}

const getAbsDif = set => {
  let arr = Array.from(set)
  return Math.abs(arr[0] - arr[1])
}

const findClosestPair = set => {
  let initialDiff = getAbsDif(set[0])
  return [...set].reduce(
    (acc, cur) => {
      if (getAbsDif(cur) < acc.dif) acc = { dif: getAbsDif(cur), pair: cur }
      return acc
    },
    { dif: initialDiff, pair: set[0] }
  ).pair
}
