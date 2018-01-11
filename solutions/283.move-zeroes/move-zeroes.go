func moveZeroes(nums []int)  {
  	j := 0

	for i,val := range nums {
		if val != 0{
			nums[j] = nums[i]
			j++
		}
	}

	for j<len(nums) {
		nums[j] = 0
        j++
	}
 
}