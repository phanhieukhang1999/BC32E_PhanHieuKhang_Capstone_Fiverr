import { api } from '../constants/api'


// profile
export const nguoiDungServices = {

    getUserService: () => {
        return api.get(`users`)
    },

    // Detail
    getUserIdService: (userId) => {
        return api.get(`users/${userId}`, userId)
    },

    // Update
    putUserIdService: (values) => {
        return api.put(`users/${values.id}`, values)
    }



}