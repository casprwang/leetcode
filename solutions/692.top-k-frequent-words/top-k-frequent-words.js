const sorter = (a, b) => {
  if (a[1] < b[1]) return 1
  if (a[1] > b[1]) return -1
  return a[0].localeCompare(b[0])
}

const topKFrequent = (words, k) => {
  const hash = {};

  for (let e of words) {
    if (hash[e]) hash[e]++
    else {
      hash[e] = 1
    }
  }

  return Object.entries(hash)
    .sort(sorter)
    .slice(0, k)
    .map(item => item[0])
}