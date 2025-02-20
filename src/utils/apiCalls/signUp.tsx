import axios, { AxiosError } from "axios";

interface Props {
	companyDetails: object;
	formDetails: object;
}

const signUp = async ({ companyDetails, formDetails }: Props): Promise<any> => {
	const url = "http://localhost:3001/api/register/";

	try {
		const response = await axios.post(url, { companyDetails, formDetails });
		console.log(response.data);
		return { status: true };
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
	return false;
};

export default signUp;
