import { Link } from "react-router-dom";
import FormField from "../layouts/loginPageLayout/FormField";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
	const [ErrorMessage, setErrorMessage] = useState("");
	return (
		<>
			<Navbar />
			{ErrorMessage && (
				<div className='bg-red-500 text-white text-center p-2'>
					{ErrorMessage}
				</div>
			)}
			<div className='w-full h-full flex flex-col justify-center items-center min-h-screen '>
				<div className=' w-[90%] md:max-w-[500px] mx-auto'>
					<h2 className='font-bold text-3xl mb-4 text-center'>
						Sign in to your workspace
					</h2>
					{/*  */}
					<FormField errorMessage={setErrorMessage} />

					<p className='text-center'>
						or <br />
						<Link className='font-bold text-underline' to='/signup'>
							Register a workspace
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
