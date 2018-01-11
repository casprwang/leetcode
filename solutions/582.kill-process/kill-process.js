const killProcess = (pid, ppid, kill) => {
  let map = {}

  for (let i = 0; i < ppid.length; i++) {
    let child = pid[i]
    let par = ppid[i]

    if (par in map) {
      map[par].push(child)
    } else {
      map[par] = [child]
    }
  }

  let res = []
  const walk = (kill) => {
    res.push(kill)

    if (kill in map) {
      let arr = map[kill]
      for (let i = 0; i < arr.length; i++) {
        walk(arr[i])
      }
    }
  }

  walk(kill)

  return res
}

