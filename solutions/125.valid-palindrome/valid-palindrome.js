/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => isPali(s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())

const isPali = s => [...s].reverse().join('') === s
