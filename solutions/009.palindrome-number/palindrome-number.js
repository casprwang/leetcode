/**
 * @param {number} x
 * @return {boolean}
 */
//const isPalindrome = x =>{
//  let arr = x.toString().split('')
//  return arr.every((e,i)=> parseInt(e) === parseInt(arr[arr.length-i-1]))
//};

const isPalindrome = x => Number( [ ...x.toString() ].reverse().join('') ) === x ;