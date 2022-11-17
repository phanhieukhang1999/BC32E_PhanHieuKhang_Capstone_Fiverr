import { api } from '../constants/api'

export const authServices = {


    dangNhapService: (thongTinDangNhap) => {
        return api.post(`auth/signin`, thongTinDangNhap)
    }

}