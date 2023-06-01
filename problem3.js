function getFactors(num) {
  let array = [1]
  for (i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i == 0) {
      array.push(i)
    }
  }
  return array
}
function isPrime(num) {
  return num.length == 1
}
function app() {
  let maxFactor = 0
  let factors = getFactors(600851475143)
  for (j = 0; j < factors.length; j++) {
    let teste = getFactors(factors[j])
    if (isPrime(teste)) {
      maxFactor = factors[j]
    }
  }
  return maxFactor
}
console.log(app())
