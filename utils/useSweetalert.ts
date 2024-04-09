import Swal from "sweetalert2";

interface Sweetalert {
	status: string;
	msg?: string;
}

const popMsg = (alert: Sweetalert) => {
	alert.status = alert.status || "success";
	switch (alert.status) {
		case "success": {
			Swal.fire({
				icon: alert.status,
				title: alert.msg,
				confirmButtonColor: "#0d6efd",
			});
			break;
		}
	}
};

const alert = { popMsg };

export default alert
