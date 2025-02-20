import axios from "axios";

const spaceDetail = async (id: string | any): Promise<any> => {
	try {
        const userData = localStorage.getItem("multiten");
		if (!userData) throw new Error("No user data found in localStorage");
        
		const user = JSON.parse(userData);
		if (!user) throw new Error("Invalid user data format");
        
        console.log('works')
		const url = `http://localhost:3001/api/user/${user.userId}/tenant/${user.tenantId}`;
		const response = await axios.get(url);
        console.log(response.data);

		// if (!response) {
		// 	throw new Error(`API request failed with status ${response.status}`);
		// }

		// const data = await response.json();
		// return data;
	} catch (error) {
		console.error("Error fetching space details:", error);
		throw error;
	}
};

export default spaceDetail;
