import { thueCongViecServices } from "../../services/thueCongViecServices"
import { THUE_CONG_VIEC } from "../types/ThueCongViecType";

export const ThueCongViecActions = () => {
    return async (dispatch) => {
        try {
            const result = await thueCongViecServices.thueCongViecService()
            console.log("result: ", result);
            if (result.status === 200) {
                dispatch({
                    type: THUE_CONG_VIEC,
                    thueCongViec: result.data.content
                })

            }

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}