import { api } from '../constants/api'


// profile
export const nguoiDungServices = {

    getUserService: () => {
        return api.get(`users`)
    },

    // Detail
    getUserIdService: (userId) => {
        return api.get(`users/${userId}`)
    },

    // Update
    putUserIdService: (userId) => {
        return api.put(`users/${userId}`)
    }



}