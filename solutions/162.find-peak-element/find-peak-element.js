/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement =
  nums => {
    if (nums.length ===1) return 0
    let arr = [Number.MIN_SAFE_INTEGER, ...nums, Number.MIN_SAFE_INTEGER]
    return output = arr.reduce((acc, e, i)=>{
      if(e>arr[i-1]&& e>arr[i+1]) acc=i
      return acc
    }, -1)-1
  }