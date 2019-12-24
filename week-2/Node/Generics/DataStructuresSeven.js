function bin(n){
    return fact(2 * n) / (fact(n+1) * fact(n)) 
}

function fact(n){
    if(n == 1) return 1
    return n * fact(n - 1)
}

console.log(bin(1))
console.log(bin(2))
console.log(bin(3))
console.log(bin(4))
console.log(bin(100))