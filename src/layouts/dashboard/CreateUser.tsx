import { useState } from "react";
import createUser from "../../utils/apiCalls/createUser";

const CreateUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setloading] = useState(false);

	const createNew = async () => {
		try {
			setloading(true);
			if (email.trim() === "" || name.trim() === "") {
				return alert("Please fill all the fields");
			}

			const response = await createUser({ email, name });
			console.log(response);
			alert("User created successfully!");
			setName("");
			setEmail("");
		} catch (err) {
			console.error("Error creating user:", err);
			alert("Error creating user. Please try again.");
		} finally {
			setloading(false);
		}
	};

	return (
		<>
			<div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-4 justify-center align-center'>
				<div className='text-2xl font-bold'>Create User</div>
				<div className='text-lg'>
					<input
						type='text'
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='w-full p-2 border border-gray-300 rounded-md my-2'
					/>

					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full p-2 border border-gray-300 rounded-md my-2'
					/>

					<div className='w-full flex justify-center mt-4'>
						<button
							className='bg-black text-white p-2 rounded-md w-1/3 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed'
							onClick={createNew}
							disabled={loading}
						>
							{loading ? "Loading..." : "Create"}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateUser;
