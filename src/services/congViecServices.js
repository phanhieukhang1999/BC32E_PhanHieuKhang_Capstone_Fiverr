import { api } from '../constants/api'

export const congViecServiecs = {

    layMenuCongViec: () => {
        return api.get(`cong-viec/lay-menu-loai-cong-viec`)

    },

    layDanhSachCongViecTheoTenService: (valueSearch) => {
        return api.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${valueSearch}`)
    }
}