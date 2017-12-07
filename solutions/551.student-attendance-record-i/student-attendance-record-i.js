/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = s => {
  if(s.indexOf("A") !== s.lastIndexOf("A")) return false
  else if(s.includes("LLL")) return false
  else return true
}