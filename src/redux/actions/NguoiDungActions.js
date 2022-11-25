import { nguoiDungServices } from "../../services/nguoiDungServices";
import { GET_USER_ACTION, GET_USER_ID_ACTION, POST_USER_ACTION, PUT_USER_ID_ACTION, SEARCH_USER } from "../types/NguoiDungType";
import { alertEditSuccess, alertSuccess } from "../../components/SweetAlert/alertSuccess";
import Swal from 'sweetalert2'

export const getUserAction = () => {
    return async (dispatch) => {
        // const navigate = useNavigate()
        try {
            const result = await nguoiDungServices.getUserService()
            console.log("result: ", result.data.content);
            // alertSuccess()
            if (result.status === 200) {
                dispatch({
                    type: GET_USER_ACTION,
                    user: result.data.content,

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

export const putUserIdAction = (values) => {
    return async (dispatch) => {
        try {
            const result = await nguoiDungServices.putUserIdService(values)
            console.log("result: ", result.data.content);
            alertEditSuccess()
            // if (result.status === 200) {
            //     dispatch({
            //         type: PUT_USER_ID_ACTION,
            //         userId: result.data?.content
            //         // type: GET_USER_ID_ACTION,
            //         // userId: result.data?.content
            //     })
            // }
            // dispatch(getUserIdAction())

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

// ADMIN
// export const searchUserAction = (valueSearch) => {
//     return async (dispatch) => {
//         try {
//             const result = await nguoiDungServices.searchUserSerVice(valueSearch)
//             console.log("result: ", result.data.content)

//             if (result.status === 200) {
//                 dispatch({
//                     type: SEARCH_USER,
//                     searchUser: result.data.content,

//                 })

//                 // dispatch(getUserAction([]))
//             }

//         } catch (error) {
//             console.log("error: ", error.response?.data);

//         }
//     }
// }

export const postUserAction = (values) => {
    return async (dispatch) => {
        try {
            const result = await nguoiDungServices.postUserService(values)
            console.log("result: ", result.data.content);
            // alertEditSuccess()
            if (result.status === 200) {
                dispatch({
                    type: POST_USER_ACTION,
                    userId: result.data?.content
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

export const deleteUserAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await nguoiDungServices.deleteUserService(id)
            console.log("result: ", result.data.content);

            dispatch(getUserAction(id))

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

