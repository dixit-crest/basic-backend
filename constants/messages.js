const messages = {
    DATA_RETRIVED: {
        message: "Data retrived successfully."
    },
    BAD_REQUEST: {
        message: "Bad request, Please pass all required parameters."
    },
    EMAIL_ALREADY_EXISTS: {
        message: "An account with this email address already exists, Please login to continue."
    },
    USER_CREATED: {
        message: "User created succesfully."
    },
    USER_UPDATED: {
        message: "User upadted succesfully."
    },
    USER_DELETED: {
        message: "User deleted succesfully."
    },
    SERVER_ERROR: {
        message: "Something bad happened on server, Please try again."
    },
    NOT_FOUND: {
        message: "Could not find this entity."
    },
    DB_CONNECTED: {
        message: "Database connected succesfully."
    },
    DB_CONNECTION_ERROR: {
        message: "Could not connect to mongodb."
    }
} 

module.exports = messages