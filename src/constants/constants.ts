export const ERROR_CODES = {
    SERVER_ERROR: {
        code: "IN4400",
        message: "server error, please try again"
    },
     FIELDS_ERROR: {
        code: "IN4407",
        message: "Required fields are missing or incorrect type"
    },
}

export const APP_CODES = {
    HEALTH_OK: { code: "IN001", message: "Service is up and running" },
    FETCH_SUCCESS: { code: "IN002", message: "Data fetched successfully" },
    CREATE_SUCCESS: { code: "IN003", message: "Data created successfully" },
    NO_DATA_FOUND: { code: "IN004", message: "No data found" },
    UNKNOWN_ERROR: { code: "IN005", message: "Something went wrong" },
    USER_REGISTER_SUCCESS: { code: "IN006", message: "User registered successfully!" },
    USER_REGISTER_FAILED: { code: "IN007", message: "Registration failed" },
    USER_LOGIN_SUCCESS: { code: "IN008", message: "Login Sucessful!" },
    USER_LOGIN_FAILED: { code: "IN009", message: "Login Failed" },
    UPDATE_DATA_FAILED: { code: "IN010", message: "Data failed to update" },
};



