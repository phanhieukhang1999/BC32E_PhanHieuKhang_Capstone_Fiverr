import { api } from '../constants/api'


// profile
export const nguoiDungServices = {

    getUserService: () => {
        return api.get(`users`)
    }


}