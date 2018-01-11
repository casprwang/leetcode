/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if(haystack.length < needle.length) return -1
  return haystack.indexOf(needle)
}