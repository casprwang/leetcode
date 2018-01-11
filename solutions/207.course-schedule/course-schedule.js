/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numsCourses, prerequisites) => {
  if (numsCourses <= 0) return false

  let indegree = new Array(numsCourses).fill(0)
  for (let i = 0; i < prerequisites.length; i++) {
    indegree[prerequisites[i][1]] ++
  }

  let queue = []
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i)
  }

  while (queue.length) {
    let cur = queue.shift()

    for (let i = 0; i < prerequisites.length; i++) {
      if (cur === prerequisites[i][0]) {
        indegree[prerequisites[i][1]]--
        if (indegree[prerequisites[i][1]] === 0) queue.push(prerequisites[i][1])
      }
    }
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] !== 0) return false
  }

  return true
}