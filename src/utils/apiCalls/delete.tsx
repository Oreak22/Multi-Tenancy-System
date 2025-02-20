import axios from "axios";

interface deleteProps {
	id: String;
}

const deleteUser = async ({ id }: deleteProps): Promise<any> => {
	try {
		const data = await localStorage.getItem("multiten");
		if (!data) return;
		const token = JSON.parse(data).token;

		const response = await axios.post(
			`http://localhost:3001/user/delete/${token}`,
			{ id },
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

export default deleteUser;
