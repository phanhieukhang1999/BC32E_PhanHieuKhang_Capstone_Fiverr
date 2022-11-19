import Swal from 'sweetalert2'


const alertFail = () => {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Bạn đã thuê thất bại !",
        showConfirmButton: false,
        timer: 1500,
    });
};

export { alertFail };