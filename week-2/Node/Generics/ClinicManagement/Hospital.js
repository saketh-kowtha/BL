const Patient = require('./Patient')
const Doctor = require('./Doctor')
const stdin = require("./stdin")
const { edit, search, deleteObj, writeToFile, readFromFile } = require("./helper")
/**
 * 
 * Class : Hospital
 * 
 */
class Hospital {

    constructor(name, spec) {
        this.hospitalName = name
        this.speclization = spec
        let data = readFromFile()
        if (data) {
            data = JSON.parse(data)
            Patient.data = data["patients"]
            Doctor.data = data["doctors"]
        }
        console.log(`Welcome To ${this.hospitalName}.\n\nDo you know ${this.hospitalName} is Special for ${this.speclization}.\n\n`)
    }


    async start() {
        while (true) {
            ["Add Doctor", "Add Patient", "Edit Doctor", "Edit Patient", "Delete Doctor", "Delete Patient", "Search Doctor", "Search Patient", "Book Doctor Appoinment", "Print All Patients", "Print All Doctors"].forEach((e, index) => console.log(`${index + 1}). ${e}.`))
            console.log("*). Exit")
            let userOpt = await stdin("Enter Your Choice : ")
            switch (parseInt(userOpt)) {
                case 1: await this.addDoctor()
                    break
                case 2: await this.addPatient()
                    break
                case 3: await this.update(Doctor)
                    break
                case 4: await this.update(Patient)
                    break
                case 5: await this.delete(Doctor)
                    break
                case 6: await this.delete(Patient)
                    break
                case 7: await this.search(Doctor)
                    break
                case 8: await this.search(Patient)
                    break
                case 9: await this.bookAppoinment()
                    break
                case 10: this.printAll(Patient)
                    break
                case 11: this.printAll(Doctor)
                    break
                default: writeToFile({ doctors: Doctor.data, patients: Patient.data })
                    process.exit()
                    break
            }
        }
    }

    async addPatient() {
        let patient = {}
        patient.name = await stdin("Enter Patient Name : ")
        patient.mobileNumber = await stdin(`Enter ${patient.name}'s Number : `)
        patient.age = await stdin(`Enter ${patient.name}'s Age : `)
        try {
            const _patient = new Patient()
            if (Patient.validate(patient))
                _patient.add(patient)
        }
        catch (ex) {
            console.log(ex.name)
        }
    }

    async addDoctor() {
        let doctor = {}
        doctor.name = await stdin("Enter Doctor Name : ")
        doctor.speclization = await stdin(`Enter ${doctor.name}'s Speclization : `)
        doctor.avalibility = await stdin(`Enter ${doctor.name}'s Avalibility [format : HH:MM AM - HH:MM PM]: `)
        try {
            const _doctor = new Doctor()
            if (Doctor.validate(doctor))
                _doctor.add(doctor)
        }
        catch (ex) {
            console.log(ex.name)
        }
    }

    async update(dataObj) {
        const id = await stdin(`Enter ID : `)
        let searchResult = search(id, "id", dataObj)
        if (searchResult && searchResult.length > 0) {
            const feildNames = Object.keys(dataObj.data[0])
            const feild = await stdin(`Enter Feild Name [${feildNames.join(",")}] : `)
            if (feildNames.indexOf(feild) > -1) {
                const value = await stdin(`Enter ${feild} Value : `)
                try {
                    edit(id, value, feild, dataObj)
                }
                catch (ex) {
                    console.log(ex)
                }
            }
        }
        else
            console.log(`No Patient Found with Id ${id}`)
    }

    async delete(obj) {
        const id = await stdin(`Enter ID : `)
        let searchResult = search(id, "id", obj)
        if (searchResult && searchResult.length > 0) {
            deleteObj(id, obj)
        }
        else
            console.log(`No Patient Found with Id ${id}`)
    }


    async search(obj) {
        const feildNames = Object.keys(obj.data[0])
        const feild = await stdin(`Enter Feild Name [${feildNames.join(",")}] : `)
        if (feildNames.indexOf(feild) > -1) {
            const value = await stdin(`Enter ${feild} Value : `)
            try {
                console.table(search(value, feild, obj))
            }
            catch (ex) {
                console.log(ex)
            }
        }
        else
            console.log(`Invalid Feild Name`)
    }

    async bookAppoinment() {
        let patientId = await stdin("Enter Patient ID : ")
        if (!patientId || search(patientId, "id", Patient).length == 0)
            return console.log("No Patient With that ID")
        let doctorId = await stdin("Enter Doctor ID : ")
        if (!doctorId || search(doctorId, "id", Doctor).length == 0)
            return console.log("No Doctor With that ID")
        let time = await stdin("Enter Time : ")
        if (!time || !time.match(/^([0-9]{1,2}):([0-9]{2}) (AM|PM)$/))
            return console.log("Invalid Time")
        time = time.split(" ").map(e => e.trim())
        if (time.length > 2)
            return console.log("Invalid Time Format")

        time = time[1] == "PM" ? (parseInt(time[0].split(":")[0].trim()) + 12) * 100 + parseInt(time[0].split(":")[1].trim()) : (parseInt(time[0].split(":")[0].trim())) * 100 + parseInt(time[0].split(":")[1].trim())

        let doctor = search(doctorId, 'id', Doctor)[0]
        let flag = true
        doctor.avalibility.forEach(ele => {
            let currEle = JSON.parse(ele)
            if (time >= parseInt(currEle.from) && time <= parseInt(currEle.to)) {
                let i = 0
                flag = false
                while (true) {
                    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * i);
                    var day = currentDate.getDate()
                    var month = currentDate.getMonth() + 1
                    var year = currentDate.getFullYear()
                    let timeSlot = currEle.from + "-" + currEle.to + " " + day + " " + month + " " + year
                    if (!doctor.appoinment) {
                        let app = {}
                        app[timeSlot] = 1
                        edit(doctor.id, app, "appoinment", Doctor)
                        this.printAppoinment(patientId, doctor.name, timeSlot, time)
                        break
                    }
                    else if (doctor.appoinment && !doctor.appoinment[timeSlot]) {
                        let app = doctor.appoinment
                        app[timeSlot] = 1
                        edit(doctor.id, app, "appoinment", Doctor)
                        this.printAppoinment(patientId, doctor.name, timeSlot, time)
                        break
                    }
                    else if (doctor.appoinment && doctor.appoinment[timeSlot] && doctor.appoinment[timeSlot] < 5) {
                        let app = doctor.appoinment
                        app[timeSlot] = app[timeSlot] + 1
                        edit(doctor.id, app, "appoinment", Doctor)
                        this.printAppoinment(patientId, doctor.name, timeSlot, time)
                        break
                    }
                    i++
                    writeToFile({ doctors: Doctor.data, patients: Patient.data })
                }
            }
        })
        if (flag)
            console.log("Doctor is Unavailable at that time")
    }

    printAppoinment(patientId, doctorName, timeSlot, time) {
        timeSlot = timeSlot.split(" ").slice(1)
        console.log(`\n\nHello ${search(patientId, "id", Patient)[0].name} Your Appoinment is booked on ${timeSlot.join("-")} at ${parseInt(time / 100)}:${time % 100}\n\n`)
    }

    printAll(obj) {
        console.table(obj.data)
    }
}


module.exports = Hospital