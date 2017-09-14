/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => n => {
  let head = 1
  let tail = n
  let mid
  while (tail > head + 1) {
    mid = parseInt((head + tail) / 2)
    if (isBadVersion(mid)) tail = mid
    else head = mid
  }
  return isBadVersion(head) ? head : tail
}
