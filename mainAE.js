let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const oddNumbers = numbers.filter(function(i) {
    return i % 2 != 0
})
const evenNumbers = numbers.filter(function(i) {
    return i % 2 == 0
})
console.log(evenNumbers)
console.log(oddNumbers )