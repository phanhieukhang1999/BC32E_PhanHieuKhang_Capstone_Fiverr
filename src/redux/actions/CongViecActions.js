import { congViecServices } from "../../services/congViecServices";
import { ADD_CONG_VIEC, LAY_CHI_TIET_LOAI_CONG_VIEC, LAY_CONG_VIEC_CHI_TIET, LAY_CONG_VIEC_THEO_CHI_TIET_LOAI, LAY_DS_CONG_VIEC, LAY_DS_CONG_VIEC_THEO_TEN, SET_MENU_CONG_VIEC, THEM_CONG_VIEC } from "../types/CongViecTypes";
import Swal from 'sweetalert2'
import { api } from "../../constants/api";


export const layDSCongViecAction = () => {

    return async (dispatch) => {
        try {
            const result = await congViecServices.layDanhSachCongViec()
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: LAY_DS_CONG_VIEC,
                    listJob: result.data.content,

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}

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

// Admin

export const addJobAction = (values) => {

    return async (dispatch) => {
        try {
            const result = await congViecServices.addJobService(values)
            console.log("result: ", result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: ADD_CONG_VIEC,
                    addJob: result.data.content,

                })

            }
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Bạn đã thêm thành công !",
                showConfirmButton: false,
                timer: 1500,
            }).then(function () {
                window.location.reload()
            })
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

export const editJobAction = (values) => {

    return async (dispatch) => {
        try {


            const result = await congViecServices.editJobService(values)
            console.log("result: ", result.data.content);

        
            // api.defaults.headers.common['token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NzgiLCJlbWFpbCI6ImtoYW5nQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsIm5iZiI6MTY2OTUzOTk2MCwiZXhwIjoxNjcwMTQ0NzYwfQ.NNHQ2Ad2Cz2x-ggVyXorg8LmzO-eCvHWvk6SblL91m0"
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Bạn đã cập nhật thành công !",
                showConfirmButton: false,
                timer: 1500,
            })
            // .then(function () {
            //     window.location.reload()
            // })
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

export const deleteJobAction = (idJob) => {
    return async (dispatch) => {
        try {
            const result = await congViecServices.deleteJobService(idJob)
            console.log("result: ", result.data.content);

            dispatch(layDSCongViecAction(idJob))

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Bạn đã xóa thành công !",
                showConfirmButton: false,
                timer: 1500,
            }).then(function () {
                window.location.reload()
            })


        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}