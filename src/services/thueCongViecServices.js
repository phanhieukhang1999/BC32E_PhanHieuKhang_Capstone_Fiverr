

import { api } from '../constants/api'
import { ThongTinThueCongViec } from '../models/ThongTinThueCongViec'

export const thueCongViecServices = {


    thueCongViecService: (thongTinThueCongViec = new ThongTinThueCongViec()) => {
        return api.post(`thue-cong-viec`, thongTinThueCongViec)
    }

}