var climbStairs = function(n) {
  let arr = [1, 2]
  if (n===1) return 1
  for (let i=0; i<n-1;i++) {
    let sum = arr[0]+ arr[1]
    arr = [arr[1], sum]
  }
  return arr[0]
}