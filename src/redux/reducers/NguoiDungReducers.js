import { GET_USER_ACTION, GET_USER_ID_ACTION } from "../types/NguoiDungType"


const stateDefault = {
    user: [],
    userId: {
        "id": 1578,
        "name": "khang",
        "email": "khang@gmail.com",
        "password": "",
        "phone": "0123456789",
        "birthday": "05/11/1999",
        "avatar": "",
        "gender": true,
        "role": "USER",
        "skill": [
            "HTML"
        ],
        "certification": [
            "string"
        ],
        "bookingJob": []
    },
}

export const NguoiDungReducers = (state = stateDefault, action) => {

    switch (action.type) {
        case GET_USER_ACTION: {
            state.user = action.user
            return { ...state }
        }

        case GET_USER_ID_ACTION: {
            state.userId = action.userId
            return { ...state }
        }
        default: return { ...state }
    }
}