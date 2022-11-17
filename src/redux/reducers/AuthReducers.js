import { TOKEN, USER_LOGIN } from "../../util/settings/config"
import { DANG_NHAP_ACTION } from "../types/AuthType"

let user = {}
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: user
}

export const AuthReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            const {thongTinDangNhap} = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.token)
            return {...state, userLogin: thongTinDangNhap}
        }
        default: return { ...state }
    }
}   