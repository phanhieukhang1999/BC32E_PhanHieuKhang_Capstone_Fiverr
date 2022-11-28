import { GET_USER_ACTION, GET_USER_ID_ACTION, POST_USER_ACTION, PUT_USER_ID_ACTION, SEARCH_USER } from "../types/NguoiDungType"


const stateDefault = {
    user: [],
    userId: {
        "id": 0,
        "name": "",
        "email": "",
        "password": "",
        "phone": "",
        "birthday": "",
        "avatar": "",
        "gender": true,
        "role": "",
        "skill": [],
        "certification": [],
        "bookingJob": []
    },

    userAdmin: {
        "id": 0,
        "name": "",
        "email": "",
        "password": "",
        "phone": "",
        "birthday": "",
        "avatar": "",
        "gender": true,
        "role": "",
        "skill": [],
        "certification": [],
        "bookingJob": []
    },

    searchUser: []

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

        // case PUT_USER_ID_ACTION: {
        //     state.userId = action.userId
        //     return { ...state }
        // }
        // ADMIN
        case POST_USER_ACTION: {
            state.userId = action.userId
            return { ...state }
        }

        case SEARCH_USER: {
            state.searchUser = action.searchUser
            return { ...state }
        }

        default: return { ...state }
    }
}