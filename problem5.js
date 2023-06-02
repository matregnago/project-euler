let divisionTest = n => {
  let i
  let r
  for (i = 1; i < 21; i++) {
    if (n % i != 0) {
      return false
    }
  }
  return true
}

let program = () => {
  let flag = false
  let k = 2520
  let r
  while (!flag) {
    if (divisionTest(k)) {
      flag = true
      r = k
    }
    k = k + 2520
  }
  return r
}
console.log(program())
