import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();

	return (
		<div className='flex flex-col justify-center items-center bg-white h-[70dvh] lg:h-[60dvh]'>
			<h1 className='text-3xl lg:text-5xl text-black font-bold'>
				Welcome to <span className='text-[#FFC107]'>Multi</span>Ten
			</h1>
			<p className='text-black text-center mt-4'>
				Create and manage your own <span className='text-[#FFC107]'>Space</span>
			</p>
			<button
				onClick={() => navigate("/signup")}
				className='mt-4 px-4 py-2 rounded-md bg-[#FFC107] text-white font-bold flex items-center gap-2 cursor-pointer hover:bg-[#FFC107]/80 transition-all duration-300'
			>
				Get Started <AiOutlineArrowRight color='black' />
			</button>
		</div>
	);
};

export default Hero;
