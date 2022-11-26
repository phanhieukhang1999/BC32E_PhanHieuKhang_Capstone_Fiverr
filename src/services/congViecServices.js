import { api } from '../constants/api'

export const congViecServices = {

    layDanhSachCongViec: () => {
        return api.get(`/cong-viec`)

    },

    layMenuCongViec: () => {
        return api.get(`cong-viec/lay-menu-loai-cong-viec`)
    },

    layDanhSachCongViecTheoTenService: (valueSearch) => {
        return api.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${valueSearch}`)
    },

    layCongViecTheoChiTietLoaiService: (maChiTietLoai) => {
        return api.get(`cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`)
    },
    layChiTietLoaiCongViecService: (maChiTietLoai) => {
        return api.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${maChiTietLoai}`)

    },
    layCongViecChiTietService: (maCongViec) => {
        return api.get(`cong-viec/lay-cong-viec-chi-tiet/${maCongViec}`)
    },

    //Admin
    addJobService: (job) => {
        return api.post(`/cong-viec`, job)

    },
}