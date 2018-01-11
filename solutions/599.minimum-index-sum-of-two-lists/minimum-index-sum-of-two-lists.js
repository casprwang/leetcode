/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  let set = new Set(list1)

  let hash = {}
  for (let i = 0; i < list2.length; i++) {
    let item = list2[i]
    if (set.has(item)) {
      hash[item] = list1.indexOf(item) + list2.indexOf(item)
    }
  }

  let arr = Object.entries(hash).sort((a, b) => a[1] - b[1])
  let res = []

  for(let i =0; i<arr.length; i++){
    if(arr[i][1] === arr[0][1]) res.push(arr[i][0])
  }

  return res
};