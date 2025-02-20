import axios from "axios";

const fetchUsers = async () => {
	try {
		const data = localStorage.getItem("multiten");
		if (!data) return;
		const cache = await JSON.parse(data);
        console.log(`http://localhost:3001/user/fetch/${cache.spaceId}/token/${cache.token}`)
		const responce = await axios.get(
			`http://localhost:3001/user/fetch/${cache.spaceId}/token/${cache.token}`,
		);
        console.log(responce.data)
		return responce.data;
	} catch (err) {
		console.log(err);
	}
};


export default fetchUsers;
