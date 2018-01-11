/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = (S, K) => {
  let entire = S.split('-').join('')
  let length = entire.length

  let resArr = []
  let prefixLenght =length % K

  resArr.push(entire.slice(0, prefixLenght))
  for(let i = 0; K * i + prefixLenght< length; i++){
    resArr.push(
      entire.slice(prefixLenght + K  * i, prefixLenght + (i+1)*K)
    )
  }

  if(resArr[0]==='') resArr.shift()
  return resArr.join('-').toUpperCase()
};