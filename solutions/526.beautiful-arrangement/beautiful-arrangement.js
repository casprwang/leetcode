/**
 * @param {number} N
 * @return {number}
 */
const countArrangement = function(N) {
  const hash = {}
  let solutionCount = 0

  const checkNumbers = function(currentNumber) {
    for (var i = 1; i <= N; i++) {
      if (!hash[i]) {
        hash[i] = currentNumber
        if (isBeautiful(currentNumber, i)) {
          if (currentNumber === N) {
            solutionCount++
          } else {
            checkNumbers(currentNumber + 1)
          }
        }
        hash[i] = 0
      }
    }
  }

  checkNumbers(1)
  return solutionCount
}


const isBeautiful = (number, index) => (number % index === 0 || index % number === 0)