import { nguoiDungServices } from "../../services/nguoiDungServices";
import { GET_USER_ACTION, GET_USER_ID_ACTION, PUT_USER_ID_ACTION } from "../types/NguoiDungType";
import { alertSuccess } from "../../components/SweetAlert/alertSuccess";

export const getUserAction = () => {
    return async (dispatch) => {
        // const navigate = useNavigate()
        try {
            const result = await nguoiDungServices.getUserService()
            console.log("result: ", result.data.content);
            alertSuccess()
            if (result.status === 200) {
                dispatch({
                    type: GET_USER_ACTION,
                    user: result.data.content.bookingJob,

                })
            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

export const getUserIdAction = (userId) => {
    return async (dispatch) => {
        try {
            const result = await nguoiDungServices.getUserIdService(userId)
            console.log("result: ", result.data.content);

            if (result.status === 200) {
                dispatch({
                    type: GET_USER_ID_ACTION,
                    userId: result.data.content

                })
            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

export const putUserIdAction = (userId) => {
    return async (dispatch) => {
        try {
            const result = await nguoiDungServices.putUserIdService(userId)
            console.log("result: ", result.data.content);

            if (result.status === 200) {
                dispatch({
                    type: PUT_USER_ID_ACTION,
                    userId: result.data.content

                })
            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}