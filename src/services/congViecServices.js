import { values } from 'lodash'
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

    infoJobService: (id) => {
        return api.get(`cong-viec/${id}`)
    },

    addJobService: (job) => {
        return api.post(`/cong-viec`, job)

    },

    addImageJobService: (idJob) => {
        return api.post(`cong-viec/upload-hinh-cong-viec/${idJob}`, values)
    },

    editJobService: (values) => {
        // api.setHeader('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NzgiLCJlbWFpbCI6ImtoYW5nQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsIm5iZiI6MTY2OTUzOTk2MCwiZXhwIjoxNjcwMTQ0NzYwfQ.NNHQ2Ad2Cz2x-ggVyXorg8LmzO-eCvHWvk6SblL91m0"
        // )

        // api.setHeaders({
        //     token: 'token',
        // })
        return api.put(`cong-viec/${values.id}`, values)
    },
    deleteJobService: (idJob) => {
        return api.delete(`cong-viec/${idJob}`)

    },
}