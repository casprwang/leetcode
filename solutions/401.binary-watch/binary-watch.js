/**
 * @param {number} num
 * @return {string[]}
 */
const readBinaryWatch = num => {
  let result = []
  for (let i =0; i<12; i++) {
    for (let j =0; j<60; j++) {
      if(count(i) + count(j)===num) {
        result.push(`${i}:${leftPad(j)}`)
      }
    }
  }
  return result
};


const count = n =>{
  return Number( n.toString(2).split('').reduce((acc,e)=> Number(acc)+Number(e)) )
};

const leftPad = n => {
  if(n<10) return '0'+n
  else return n+''
};