/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => s.split(' ').map(e=>[...e].reverse().join('')).join(' ')