function UserRegstrationController() {
    
    function isValidName(userName) {
        if (!userName)
                return false
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        return nameRegex.test(userName)
    }

    function isValidPincode(pinCode) {
        if (!pinCode)
            return false
        let pinCodeRegex = RegExp("^[0-9]{6}$")
        return pinCodeRegex.test(pinCode)
    }

    return {
        isValidName,
        isValidPincode
    }

}

module.exports = UserRegstrationController()