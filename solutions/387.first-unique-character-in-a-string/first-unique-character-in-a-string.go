func firstUniqChar(s string) int {
	hash := map[string]int{}
	for _, c := range s {
		char := string(c)
		hash[char]++
	}

	for i, c := range s {
		char := string(c)
		if hash[char] == 1 {
			return i
		}
	}
	return -1
}
