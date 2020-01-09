/**
 * @author Kowtha aketh
 *
 * @description TDD Unit Testing Source File
 *
 */


function validateEmail(email) {
    //Checking For @ in email
    const atCount = (email.match(/@/g) && email.match(/@/g).length || 0)
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
    else if (!/^[a-zA-Z0-9-_.@]+$/.test(email))
        return `Email only allow character, digit, underscore, dot and dash`
    else if (!/^[a-zA-Z0-9]+$/.test(email.split("@")[1]))
        return "Email tld is only allow characters or digits"
    else if (email.split("@")[0].match(/./g).length > 1)
        return "Double Dots are not allowed in email"
    else if (email.test(/.@/))
        return 'Emails last character cannot end with dot'
    else if (!email.split(".")[email.split(".").length - 1].test(/[a-zA-z]/))
        return 'Email TLD should contain only chars'
    else if (email.split("@")[1].match(/,/g).length > 2)
        return 'Email cannot have multiple Tld'
}

module.exports = validateEmail