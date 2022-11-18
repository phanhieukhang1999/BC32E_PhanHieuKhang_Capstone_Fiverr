import { GET_USER_ACTION } from "../types/NguoiDungType"


const stateDefault = {
    user: []
}

export const NguoiDungReducers = (state = stateDefault, action) => {

    switch (action.type) {
        case GET_USER_ACTION: {
            state.user = action.user
            return { ...state }
        }
        default: return { ...state }
    }
}