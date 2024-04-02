export const setCookie = (
	name: String = "",
	value: String = "",
	expire: Number = 1
) => {
	const d = new Date();
	d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000);
	const expires = d.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const getCookie = (name: String = "") => {
	const value = `;${document.cookie}`;
	const parts: String[] = value.split(`;${name}=`);
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	}
};
