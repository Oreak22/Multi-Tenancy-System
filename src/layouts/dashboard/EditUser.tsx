import { useEffect, useState } from "react";
import fetchUsers from "../../utils/apiCalls/fetchUser";

const EditUser = () => {
	const [users, setUsers] = useState(null);
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const usersData = await fetchUsers(); // Await the async function
				console.log(usersData.users);

				if (!usersData || usersData.length === 0) {
					alert("No user found");
					return;
				}

				setUsers(usersData.users);
			} catch (error) {
				console.error("Error fetching users:", error);
				alert("Failed to fetch users");
			}
		};
		fetchUser();
	}, []);
	if (users === null)
		return (
			<div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 justify-center align-center text-center'>
				loading...
			</div>
		);
	return (
		<div className='w-[100%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 justify-center align-center'>
			{users?.map((user: User) => (
				<div
					key={user.id}
					className='md:flex gap-4 justify-evenly md:justify-between align-center border-b-2 p-2'
				>
					<div className='flex w-100 md:w-[65%] gap-4 justify-between align-center'>
						<h1 className='w-[20%] md:w-[40%]  overflow-x-hidden'>{user.name}</h1>
						<h1 className='w-[20%] md:w-[40%] overflow-x-hidden'>{user.email}</h1>
						<h1 className='w-[20%] md:w-[20%] overflow-x-hidden'>{user.status}</h1>
					</div>
					<div className='mt-4 md:mt-0 flex gap-4 justify-between align-center'>
						<p>
							<button className='p-2 bg-gray-500 text-white rounded-sm'>
								Disactivate
							</button>
						</p>
						<p>
							<button className='p-2 bg-red-500 text-white rounded-md'>
								Delete
							</button>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default EditUser;
