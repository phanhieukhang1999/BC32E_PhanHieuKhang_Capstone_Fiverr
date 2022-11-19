import { useNavigate } from "react-router-dom";
import { alertFail } from "../../components/SweetAlert/alertFail";
import { alertSuccess } from "../../components/SweetAlert/alertSuccess";
import { ThongTinThueCongViec } from "../../models/ThongTinThueCongViec";
import { thueCongViecServices } from "../../services/thueCongViecServices"
import { THUE_CONG_VIEC } from "../types/ThueCongViecType";

export const ThueCongViecActions = (thongTinThueCongViec = new ThongTinThueCongViec()) => {
    // const navigate = useNavigate()
    return async (dispatch) => {
        try {
            const result = await thueCongViecServices.thueCongViecService(thongTinThueCongViec)
            console.log("result: ", result);
            alertSuccess()
            if (result.status === 201) {
                dispatch({
                    type: THUE_CONG_VIEC,
                    thueCongViec: result.data.content,
                })
                
                // navigate('/')
            }

        } catch (error) {
            console.log("error: ", error.response?.data);
            alertFail()

        }
    }
}