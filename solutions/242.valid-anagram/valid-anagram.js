/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => [...s].sort().join("") === [...t].sort().join("")