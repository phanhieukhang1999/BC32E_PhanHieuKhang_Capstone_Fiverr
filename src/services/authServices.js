import { api } from '../constants/api'

export const authServices = {


    dangNhapService: (thongTinDangNhap) => {
        return api.post(`auth/signin`, thongTinDangNhap)
    },

    dangKyService: (thongTinDangKy) => {
        return api.post(`auth/signup`, thongTinDangKy)
    }

}