import { authServices } from "../../services/authServices"
import { DANG_NHAP_ACTION } from "../types/AuthType";


export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await authServices.dangNhapService(thongTinDangNhap)
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}