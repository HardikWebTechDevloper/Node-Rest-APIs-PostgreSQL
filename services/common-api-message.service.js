const Message = {
    DATA_FOUND: "Data Found!",
    NO_DATA_FOUND: "No Data Found!",
    TO_MANY_ATTEMPTS: "User account has been blocked, Please contact Admin",
    MOBILE_NOT_MAPPED: "Mobile Not Mapped To This User Id",
    MOBILE_ALREADY_REG: "Mobile is already registered",
    MOBILE_NOT_ALREADY_REG: "Mobile is not registered",
    PIN_NOT_SET: "User is not registered",
    ACTIVE: "Active Session",
    INVALID_TOKEN: "Invalid Token!",
    SOMETHING_WRONG: "Something went wrong!"
}

const User = {
    ALREADY_EXIST: "User already exists",
    SAVE_SUCCESS: "User has been created successfully!",
    SAVE_FAILED: "User has not been created!",
    UPDATE_SUCCESS: "User has been updated successfully!",
    DELETE_SUCCESS: "User has been deletedF successfully!",
    EMAIL_EXISTS: "Email is already exists in our records!",
    PHONE_EXISTS: "Phone number is already exists in our records!",
    REQUIRED_USER_EMAIL: "Email is mandatory!",
    REQUIRED_USER_PHONE: "Mobile is mandatory!",
    REQUIRED_USER_PHONE_LENGTH: "Mobile must be 10 numbers!",
    USER_LOGIN_SUCCESS: "Login successful!",
    USER_ACTIVATE_SUCCESS: "User activated successfully!",
    USER_LOGIN_FAILED: "Login Failed!",
    USER_NOT_EXISTS: "User does not exist in our records !",
    LOGUT_SUCESS: "User has been log out successfully.",
    USER_ID: "User id cannot be empty.",
}

module.exports = {
    Message,
    User,
}