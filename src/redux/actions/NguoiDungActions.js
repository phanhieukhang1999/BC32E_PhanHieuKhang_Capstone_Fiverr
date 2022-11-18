import { nguoiDungServices } from "../../services/nguoiDungServices";
import { GET_USER_ACTION } from "../types/NguoiDungType";

export const getUserAction = () => {
    return async (dispatch) => {
        // const navigate = useNavigate()
        try {
            const result = await nguoiDungServices.getUserService()
            console.log("result: ", result.data.content);
            
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