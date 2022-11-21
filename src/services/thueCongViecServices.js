

import { api } from '../constants/api'
import { ThongTinThueCongViec } from '../models/ThongTinThueCongViec'

export const thueCongViecServices = {


    thueCongViecService: (thongTinThueCongViec = new ThongTinThueCongViec()) => {
        return api.post(`thue-cong-viec`, thongTinThueCongViec)
    },

    layDanhSachCVDaThueService: () => {
        return api.get(`thue-cong-viec/lay-danh-sach-da-thue`)
    },
    xoaCongViecService: (id) => {
        return api.delete(`thue-cong-viec/${id}`)
    }


}