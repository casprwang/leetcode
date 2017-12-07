/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
  let map = {}

  for (let i = 0; i < moves.length; i++) {
    let item = moves[i]

    map[item] = ~~map[item] + 1
  }

  if (map["U"] !== map["D"]) return false
  if (map["L"] !== map["R"]) return false

  return true
}
