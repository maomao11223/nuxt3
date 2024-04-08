import Swal from "sweetalert2/dist/sweetalert2";

const popMsg = (status = "success", msg?: String) => {
	switch (status) {
		case "succcess": {
			// Swal.fire({
			//     icon: status,
			//     title: msg,
			//     confirmButtonColor:'#0d6efd'
			// })
			break;
		}
	}
};

export default popMsg;
