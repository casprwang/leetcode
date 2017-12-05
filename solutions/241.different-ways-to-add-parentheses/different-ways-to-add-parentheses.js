// var diffWaysToCompute = function(input) {
//   let ans = []

//   const dfs = (numStack, symStack, num, index) => {
//     if (index === input.length) {
//       numStack.push(num)

//       while (symStack.length) {
//         var b = numStack.pop()
//         var a = numStack.pop()
//         var sym = symStack.pop()

//         numStack.push(eval('(' + a + ')' + sym + '(' + b + ')'))
//       }

//       ans.push(numStack[0])
//       return
//     }

//     let item = input[index]

//     if ('-+*'.indexOf(item) !== -1) {
//       // 不处理
//       dfs([...numStack, num], [...symStack, item], 0, index + 1)

//       // 处理
//       let _numStack = [...numStack, num]
//       let _symStack = [...symStack]

//       while (_symStack.length) {
//         var b = _numStack.pop()
//         var a = _numStack.pop()
//         var sym = _symStack.pop()

//         _numStack.push(eval('(' + a + ')' + sym + '(' + b + ')'))

//         dfs([..._numStack], [..._symStack, item], 0, index + 1)
//       }
//     } else {
//       dfs(numStack.concat(), symStack.concat(), num * 10 + +item, index + 1)
//     }
//   }

//   dfs([], [], 0, 0)

//   return ans
// }

var diffWaysToCompute = function(input) {
  // save the possible values from the string input
  let res = []

  for (let i = 0, len = input.length; i < len; i++) {
    let item = input[i]
    if ('+-*'.indexOf(item) !== -1) {
      let left = diffWaysToCompute(input.substring(0, i))
      let right = diffWaysToCompute(input.substring(i + 1))
      for (let a of left) {
        for (let b of right) {
          res.push(eval('(' + a + ')' + item + '(' + b + ')'))
        }
      }
    }
  }

  if (!res.length) {
    res.push(+input)
  }

  return res
}
