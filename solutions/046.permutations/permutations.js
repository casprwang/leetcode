/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums, res = []) => {
        const iter = temp => {
                if (temp.length === nums.length) res.push([...temp])
                else {
                        for (let i = 0; i < nums.length; i++) {
                                if(temp.includes(nums[i])) continue
                                temp.push(nums[i])
                                iter(temp)
                                temp.pop()
                        }
                }
        }

        iter([])
        return res
};