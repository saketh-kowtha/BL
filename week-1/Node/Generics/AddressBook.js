const readline = require('readline');
const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

// new function that promises to stdin a question and 
// resolve to its answer
function stdin(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, (input) => resolve(input) );
  });
}

const fs = require("fs")


class AddressBoook{

    async constructor(){
        while(true){
            let userOpt = await stdin("\n1. Open AdressBook.\n2.Create New Address Book.\n3.Exit.")
            switch(userOpt){
                case 1 : this.newAddressBook(userOpt)
                        break;
                case 2: this.openAddressBook(userOpt)
                        break
                default : process.exit() 
            }
        }
    }

    newAddressBook(name){

    }

    async openAddressBook(name){
        addressBooks = fs.readdirSync(__dirname)
        if(addressBooks.indexOf(name) == -1)
        {
            console.log("Invalid Address Book.")
        }
        else{
            this.addressBookName = name
        }
    }

    saveAddressBook(name){
        addressBooks = fs.readdirSync(__dirname)
        if(addressBooks.indexOf(name) == -1)
        {
            console.log("Invalid Address Book.")
        }
        else{
            this.addressBookName = name
        }
    }


    async addNewContact(){
        const firstName = await stdin("Enter First Name : ")
        const lastName = await stdin("Enter Last Name : ")
        const address = await stdin("Enter Address : ")
        const city = await stdin("Enter City : ")
        const state = await stdin("Enter State : ")
        const zip = await stdin("Enter ZIP : ")
        const phoneNumber = await stdin("Enter Phone Number : ")
        let contact = new Person(firstName, lastName,address,city,state,zip,phoneNumber)
    }

    editContact(current, updated){

    }

    getContact(query){

    }

    displayContacts(){

    }

    sortByName(){

    }

    sortByZip(){

    }

    deleteContact(query){

    }

}






class Person{
    constructor(firstName, lastName,address,city,state,zip,phoneNumber){
        const firstName = Symbol()
        const lastName = Symbol()
        const address = Symbol()
        const city = Symbol()
        const state = Symbol()
        const zip = Symbol()
        const phoneNumber = Symbol()
        this[firstName]  = firstName
        this[lastName]  = lastName
        this[address]  = address
        this[city]  = city
        this[state]  = state
        this[zip]  = zip
        this[phoneNumber]  = phoneNumber
    }
}