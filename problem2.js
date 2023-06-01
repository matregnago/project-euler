let fibo = n => {
  if (n <= 1) {
    return n
  }
  return fibo(n - 1) + fibo(n - 2)
}
let ans = () => {
  let n = 34
  let sum = 0
  for (i = 0; i < n; i++) {
    if (fibo(i) % 2 == 0) {
      sum = sum + fibo(i)
    }
  }
  console.log(sum)
}
ans()
