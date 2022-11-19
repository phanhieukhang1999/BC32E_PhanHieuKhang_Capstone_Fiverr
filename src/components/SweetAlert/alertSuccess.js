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
    });
    // navigate: () => {
    //     navigate('/')
    // }

};

export { alertSuccess };