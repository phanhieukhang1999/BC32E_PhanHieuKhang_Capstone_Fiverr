import { api } from '../constants/api'

export const congViecServiecs = {

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

    }
}