import axios, { AxiosError } from "axios";

interface LoginProps {
	email: string;
	password: string;
}
const login = async ({ email, password }: LoginProps): Promise<any> => {
	try {
		const res = await axios.post("http://localhost:3001/api/login/", {
			email,
			password,
		});
		return { status: true, cache: res.data.cache };
	} catch (error) {
		if (error instanceof AxiosError) {
			console.error("Error response:", error.response?.data || error.message);
			return { staus: false, res: error.response?.data || error.message };
		} else {
			console.error("Unexpected error:", error);
			return { status: false, message: "Unexpected error" };
		}
		throw error;
	}
};

export default login;
