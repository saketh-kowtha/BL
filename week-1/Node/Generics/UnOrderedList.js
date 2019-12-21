const fs = require("fs")

class UnOrderedList {
    
    constructor(){
        this.list = []
    }

    add(ele){
        if(this.list.indexOf(ele) == -1)
            this.list.unshift(ele)
    }

    remove(ele){
        this.pop(ele)
    }

    search(ele){
        return this.list.indexOf(ele) > -1    
    }

    isEmpty(){
        return this.list.length ==0
    }

    size(){
        return this.list.length 
    }

    append(ele){
        if(this.list.indexOf(ele) == -1)
        this.list.push(ele)
    }

    index(ele){
        return this.list.indexOf(ele)
    }

    pop(ele){
        const index = this.list.indexOf(ele)
        if(index > -1){
            this.list.splice(index, 1)
        }
        return index
    }

    insert(pos, ele){
        this.list.splice(pos -1 , 0 , ele)
    }

}


let list = new UnOrderedList()

fs.readFile("./words.txt", (err, data) => {

    if(err) throw err

    data=data.toString()

    ddata=data.split()

})


module.exports.UnOrderedList = UnOrderedList