/**
 * @author Kowtha aketh
 *
 * @description TDD Unit Testing Source File
 *
 */


/**
 * Validating Email
 * @param {1} email
 *  
 */

function validateEmail(email) {
    const atCount = (email.match(/@/g) && email.match(/@/g).length || 0)
    const _email = email.split("@")
    if (atCount == 0)
        return "Must contain @ symbol"
    else if (atCount > 1)
        return "Only single @ is allowed"
    else if (email.indexOf("@.") > -1)
        return "Tld cannot start with ."
    else if (((email.length - 1) - email.lastIndexOf(".")) < 2)
        return `${email.substring(email.lastIndexOf(".") + 1)} is not a valid TLD, Last tld must contain atleast two characters`
    else if (!/[A-Za-z]/.test(email[0]))
        return `Email first character cannot start with ${email[0]}`
    else if (!/^[a-zA-Z0-9-_.@+]+$/.test(_email[0]))
        return `Email only allow character, digit, underscore, dot and dash`
    else if (!/^[a-zA-Z0-9]+$/.test(_email[1].split(".")[0]))
        return "Email tld is only allow characters or digits"
    else if (_email[0].split(".").length - 1 > 1)
        return "Double Dots are not allowed in email"
    else if (email.indexOf(".@") > -1)
        return 'Emails last character cannot end with dot'
    else if (!/^[a-zA-Z]+$/.test(email.split(".")[email.split(".").length - 1]))
        return 'Email TLD should contain only chars'
    else if (_email[1].split(".").length - 1 > 2)
        return 'Email cannot have multiple Tld'
    return true
}

module.exports = validateEmail