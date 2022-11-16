import { congViecServices } from "../../services/congViecServices";
import { LAY_CHI_TIET_LOAI_CONG_VIEC, LAY_CONG_VIEC_CHI_TIET, LAY_CONG_VIEC_THEO_CHI_TIET_LOAI, LAY_DS_CONG_VIEC_THEO_TEN, SET_MENU_CONG_VIEC } from "../types/CongViecTypes";


export const layMenuCongViecAction = () => {

    return async (dispatch) => {
        try {
            const result = await congViecServices.layMenuCongViec()
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: SET_MENU_CONG_VIEC,
                    menuJob: result.data.content,

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}
export const layChiTietLoaiCongViecAction = (maChiTietLoai) => {

    return async (dispatch) => {
        try {
            console.log(maChiTietLoai);
            const result = await congViecServices.layChiTietLoaiCongViecService(maChiTietLoai)
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: LAY_CHI_TIET_LOAI_CONG_VIEC,
                    menuItem: result.data.content[0],

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}

export const layCongViecTheoChiTietLoaiAction = (maChiTietLoai) => {

    return async (dispatch) => {
        try {
            console.log(maChiTietLoai);
            const result = await congViecServices.layCongViecTheoChiTietLoaiService(maChiTietLoai)
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: LAY_CONG_VIEC_THEO_CHI_TIET_LOAI,
                    menuItem: result.data.content[0],

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}

export const layCongViecChiTietAction = (maCongViec) => {

    return async (dispatch) => {
        try {
            console.log(maCongViec);
            const result = await congViecServices.layCongViecChiTietService(maCongViec)
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: LAY_CONG_VIEC_CHI_TIET,
                    detailJobs: result.data.content[0],

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}

export const layDanhSachCongViecTheoTenAction = (valueSearch) => {

    return async (dispatch) => {
        try {
            const result = await congViecServices.layDanhSachCongViecTheoTenService(valueSearch)
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: LAY_DS_CONG_VIEC_THEO_TEN,
                    resultSearchJobByName: result.data.content,

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}