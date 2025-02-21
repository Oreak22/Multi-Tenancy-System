import axios from "axios";



const deleteUser = async ({ id }: { id: string })=> {
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
