import { congViecServiecs } from "../../services/congViecServices";
import { SET_MENU_CONG_VIEC } from "../types/CongViecTypes";


export const layMenuCongViecAction = () => {
    return async (dispatch) => {
        try {
            const result = await congViecServiecs.layMenuCongViec()
            console.log("result: ", result);
            if (result.statusCode === 200) {
                dispatch({
                    type: SET_MENU_CONG_VIEC,
                    menuJob: result.data.content,

                })
                

            }
        } catch (error) {
            console.log("error: ", error);

        }
    }
}