import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const alertSuccess = () => {
    // const navigate = useNavigate()
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Bạn đã thuê thành công !",
        showConfirmButton: false,
        timer: 1500,
    }).then (function() {
        window.location.href = "/";
    }) 
    

};

const alertDeleteSuccess = () => {
    // const navigate = useNavigate()
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Bạn đã xóa thành công !",
        showConfirmButton: false,
        timer: 1500,
    })
    

};

const alertEditSuccess = () => {
    // const navigate = useNavigate()
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Bạn đã cập nhật thành công !",
        showConfirmButton: false,
        timer: 1500,
    }).then (function() {
        window.location.reload()
    }) 
    

};

export { alertSuccess, alertDeleteSuccess, alertEditSuccess };