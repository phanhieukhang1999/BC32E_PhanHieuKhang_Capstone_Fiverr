import { api } from '../constants/api'

export const congViecServiecs = {

    layMenuCongViec: () => {
        return api.get(`cong-viec/lay-menu-loai-cong-viec`)

    }
}