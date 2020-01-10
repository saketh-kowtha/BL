

function sum(a, b) {
    
    if (a == "" || b == "")
        return 0

    if (typeof a === undefined || typeof b === undefined)
        return 0
    
    if (isNaN(a) || isNaN(b))
        return 0

    if(Array.isArray(a) || Array.isArray(b))
        return 0
    
    let c = a + b

    return c
    
}

module.exports = sum