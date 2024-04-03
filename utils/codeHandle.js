
import Swal from "sweetalert2";
// 請求狀態執行動作
export default (code, msg) => {
    switch (code) {
        case 0:
            // ...
            break;
        case 1:
            Swal.fire({
                icon: "error",
                title: msg,
            });
            // ...
            break;
        case 2:
            // ...
            break;
        case 3:
            // ...
            break;
        case 4:
            // 1. logout
            // useAuthStore().logout(useRoute() ? useRoute().query.redirect : '/');
            Swal.fire({
                title: "已逾期，請重新登入",
                icon: "error",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "是",
            });
            break;
        default:
            Swal.fire({
                icon: "error",
                title: msg,
            });
            break;
    };
}
