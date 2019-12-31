const Util = require("./Util").Util

console.log("\nAnagrams\n",Util.anagrams(["1234", "4321"]))

console.log("\nPrime Numbers 1 - 1000\n")
Util.primeNumbers()

console.log("\nBinary Search\n")
Util.binarySearch([1,2,3,4,5,6,93,100], 93)
Util.binarySearch([1,2,3,4,5,6,93,100], 0)
Util.binarySearch([1,2,3,4,5,6,93,100], 101)

console.log("\nInsertion sort Numbers\n")
Util.insertionSort([1,9,7,5,100,13,2])

console.log("\nInsertion sort Chars\n")
Util.insertionSort(['z','a','x','A','M'])


console.log("\nBubble sort Numbers\n")
Util.insertionSort([1,9,7,5,100,13,2])

console.log("\nBubble sort Chars\n")
Util.insertionSort(['z','a','x','A','M'])

console.log("\nVending Machine\n")
Util.vendingMachine([2000, 1000, 500, 100, 50, 10, 5, 2, 1], 5000)

console.log("\nString Insertion Sort\n")
Util.stringInsertionSort(["abc xyz mno a b x n"])

console.log("\nWord List\n")
Util.wordList(["ab"])