import { TOKEN, USER_LOGIN, USER_REGISTER } from "../../util/settings/config"
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types/AuthType"

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

let register = {}
if (localStorage.getItem(USER_REGISTER)) {
    register = JSON.parse(localStorage.getItem(USER_REGISTER))
}

const stateDefault = {
    userLogin: user,

    userRegister: register
}

export const AuthReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.token)
            return { ...state, userLogin: thongTinDangNhap }
        }

        case DANG_KY_ACTION: {
            const { thongTInDangKy } = action
            // localStorage.setItem(USER_LOGIN, JSON.stringify(thongTInDangKy))
            // localStorage.setItem(TOKEN, thongTInDangKy.token)
            return { ...state, userRegister: thongTInDangKy }
        }
        default: return { ...state }
    }
}   