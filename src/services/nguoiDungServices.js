import { api } from '../constants/api'


// profile
export const nguoiDungServices = {

    getUserService: () => {
        return api.get(`users`)
    },

    getUserIdService: (userId) => {
        return api.get(`users/${userId}`)
    },

    putUserIdService: (id) => {
        return api.put(`users/${id}`)
    }



}