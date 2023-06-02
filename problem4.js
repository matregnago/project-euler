let isPalindrome = n => {
  let j = n.length - 1
  let i = 0
  while (i < j) {
    if (n[i] != n[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
let multi = limit => {
  let res = 0
  let max = 0
  limit = Math.pow(10, limit)
  let i, j
  for (i = limit / 2; i < limit; i++) {
    for (j = limit / 2; j < limit; j++) {
      let res = i * j
      if (isPalindrome(res.toString())) {
        if (max < res) {
          max = res
        }
      }
    }
  }
  return max
}
//This function finds the largest palindrome made from the product of N-digit numbers.
//N above 5 will delay the answer
console.log(multi(3))
