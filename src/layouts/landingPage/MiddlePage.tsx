import { useNavigate } from "react-router-dom";

const MiddlePage = () => {
	const navigate = useNavigate();
	return (
		<div className='bg-black flex justify-center items-center w-full py-10'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-white  text-2xl md:text-3xl lg:text-5xl font-bold'>
					Create, Invite, and Collaborate
				</h1>
				<div className='h-1 w-20 bg-white mt-5 mb-5'></div>

				<button
					onClick={() => navigate("/login")}
					className='bg-white text-black px-5 py-2 mt-5 rounded-lg'
				>
					Get Started
				</button>
			</div>
		</div>
	);
};

export default MiddlePage;
