/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s =>{
  let stack = []
  let map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])
  s.split('').forEach((e)=>{
    if(stack.length ===0) stack.push(e)
    else if(e === map.get( stack[stack.length -1] )) stack.pop()
    else stack.push(e)
  })
  return stack.length ===0
}
