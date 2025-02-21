import axios from "axios";

const spaceDetail = async (): Promise<any> => {
	try {
        const userData = localStorage.getItem("multiten");
		if (!userData) throw new Error("No user data found in localStorage");
        
		const user = JSON.parse(userData);
		if (!user) throw new Error("Invalid user data format");
        
		const url = `http://localhost:3001/user/user/${user.userId}/tenant/${user.spaceId}/token/${user.token}`;
        console.log(url)
		const response = await axios.get(url);
        console.log(response.data);

		return response.data.data;
	} catch (error) {
		console.error("Error fetching space details:", error);
		throw error;
	}
};

export default spaceDetail;
