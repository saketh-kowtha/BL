const UnOrderedList = require("./UnOrderedList")

class StackList{
    
    constructor(){
        this.list = new UnOrderedList()
    }

    push(ele){
        this.list.add(ele)
    }

    pop(){
        return this.list.pop(0)
    }

    toString(){
        return this.list.toString()
    }
}


class QueueList{
    
    constructor(){
        this.list = new UnOrderedList()
    }

    queue(ele){
        this.list.append(ele)
    }

    dequeue(){
        return this.list.pop(0)
    }

    toString(){
        return this.list.toString()
    }
}


module.exports.QueueList = QueueList
module.exports.StackList = StackList