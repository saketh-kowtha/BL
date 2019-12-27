const readline = require('readline');

//Creating Sync STDIN
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function stdin(questionText) {
return new Promise((resolve, reject) => {
  readlineInterface.question(questionText, (input) => resolve(input) );
});
}

/**
 * Class : Hospital
 */
class Hospital{
    
    constructor(name, spec){
        this.hospitalName = name
        this.speclization = spec
    }


    async start(){
        while(true){
            ["Add Doctor", "Add Patient", "Delete Doctor", "Delete Patient", "Search Doctor", "Search Patient", "Book Doctor Appoinment"].forEach((e, index) => console.log(`${index + 1}. ${e}.`))
            console.log("*. Exit")    
            let userOpt = await stdin("Enter Your Choice : ")
            switch(parseInt(userOpt)){
                case 2 : await this.addPatient()
                         break
                case 4 : await this.deletePatient()
                        break
                case 6 : this.searchPatient()
                        break
                case 7 : this.patientList()
                        break
                case 8 : await this.updatePatient()
                        break
            }
        }
    }

    async addPatient(){
        let patient = {}
        
        while(true)
        {
            patient.name = await stdin("Enter Patient Name : ")
            if(isNaN(patient.name))
                break
            console.log("Invalid Patient Name\n")
        }

        while(true)
        {
            patient.mobileNumber = await stdin(`Enter ${patient.name}'s Number : `)
            if(!isNaN(patient.mobileNumber) && patient.mobileNumber.trim() != "")
                break
            console.log("Invalid Patient Number\n")
        }

        while(true)
        {
            patient.age = await stdin(`Enter ${patient.name}'s Age : `)
            if(!isNaN(patient.age) && patient.age.trim() != "")
                break
            console.log("Invalid Patient Age\n")
        }

        const _patient = new Patient()
        _patient.add(patient)

    }

    addDoctor(){

    }

    async updatePatient(){
        const id = await stdin(`Enter ID : `)
        let searchResult = Patient.search(id, "id")
        if(searchResult && searchResult.length > 0)
        {
            const feildNames = Object.keys(Patient.data[0])
            const feild = await stdin(`Enter Feild Name [${feildNames.join(",")}] : `)
            if(feildNames.indexOf(feild) > -1){
                const value = await stdin(`Enter ${feild} Value : `)
                Patient.edit(id, value,feild)
            }
        }
    }

    updateDoctor(){

    }
 
    async deletePatient(){
        const id = await stdin(`Enter ID : `)
        let searchResult = Patient.search(id, "id")
        if(searchResult && searchResult.length > 0)
        {
           Patient.delete(id)
        }
    }

    deleteDoctor(){

    }

    searchDoctor(query, feild){

    }

    bookAppoinment(){

    }

    patientList(){
        console.table(Patient.data)
    }

    genId(){
        return (new Date()).getTime() % 10000000000
    }

}

class Patient extends Hospital {
    
    constructor(){
        super()
    }

    add({name, mobileNumber, age}){
        this.constructor.data.push( {name, mobileNumber, age, id: this.genId()} )
        console.log("Patient Added Succefully\n")
    }

    static edit(currentId, newValue, feild){
        Patient.data.forEach(element => {
            if(element.id == currentId)
                element[feild] = newValue
        });
        console.log("Successfully Updated")
    }

    static delete(id){
        Patient.data = Patient.data.filter(e => e.id != id)
        console.log("Succesfully Deleted")
    }

    static search(query, feild){
        if(feild && query)
            return Patient.data.filter(e => e[feild] && e[feild] == query )
    }

    getPatients(){
        return this.constructor.data
    }


}
Patient.data = []


class Doctor extends Hospital{
    constructor(){
        super()
    }

    add({name, speclization, avalibility}){
        avalibility = avalibility.split(",").map(e => {
            return {from: e.split("-"), to: e.split("-")}
        })
        this.constructor.data.push({name, speclization, avalibility, id: super.genId()})
    }

    edit(currentId, newValue, feild){
        this.constructor.data.forEach(element => {
            if(element.id === currentId)
                element[feild] = newValue
        });
    }

    delete({id}){
        this.constructor.data = this.constructor.data.filter(e => e.id !== id)
    }

    search(query, feild){
        if(feild && query)
            return this.constructor.data.filter(e => e[feild] && e[feild] === query )
    }

    bookAppoinment(id){
        
    }

}


module.exports = Hospital