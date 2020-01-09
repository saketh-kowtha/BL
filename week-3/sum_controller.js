

let sum = require("./sum")

let err1 = sum()

let err2 = sum(2)

let err3 = sum("abc", 2)

let err4 = sum("", 2)

let good = sum(2, 4)

console.log("Res : " + good)