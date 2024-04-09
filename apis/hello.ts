import httpRequest from "~/service";

export async function getHello() {
	return httpRequest.get("/api/hello");
}
