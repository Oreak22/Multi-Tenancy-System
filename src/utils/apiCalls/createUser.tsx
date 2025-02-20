import axios from "axios";

interface createProps {
	name: String;
	email: string;
}

const createUser = async ({ email, name }: createProps): Promise<any> => {
	try {
		const data = await localStorage.getItem("multiten");
		if (!data) return;
		const cache = await JSON.parse(data);

		const responce = await axios.post(`http://localhost:3001/api/register/${cache.token}`, {
			name,
			email,
			tenantId: cache.spaceId,
		});
		return responce.data;
	} catch (err) {
		console.log(err);
		return false;
	}
};

export default createUser;
