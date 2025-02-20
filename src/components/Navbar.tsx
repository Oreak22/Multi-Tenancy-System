import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

interface UserCache {
	userId: string;
	name: string;
	role: string;
}

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [cache, setCache] = useState<UserCache | null>(null);
	const navigate = useNavigate();

	const logOut = () => {
		localStorage.clear();
		navigate("/");
	};

	useEffect(() => {
		try {
			const rawCache = localStorage.getItem("multiten");
			if (rawCache) {
				setCache(JSON.parse(rawCache));
			}
		} catch (err) {
			console.error("Error retrieving cache:", err);
		}
	}, []);

	return (
		<>
			<div className='bg-black h-[5rem] w-full flex flex-col justify-center items-center sticky top-0 z-10'>
				<nav className='container flex justify-between items-center px-4 lg:px-6'>
					<Link
						to={cache ? `/${cache.userId}` : "/"}
						className='flex items-center text-3xl font-bold text-white'
					>
						<span className='text-[#FFC107]'>Multi</span>Ten
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden md:flex items-center gap-5 text-white'>
						{cache ? (
							<>
								<li className='text-[#FFC107]'>
									<Link to={`/${cache.userId}`}>Profile</Link>
								</li>
								<li className='text-red-500 cursor-pointer' onClick={logOut}>
									Log-Out
								</li>
							</>
						) : (
							<>
								<li className='shadow-md p-3 bg-white text-black rounded-sm hover:bg-gray-200'>
									<Link to='/login'>Login</Link>
								</li>
								<li className='shadow-md p-3 bg-gray-600 text-white rounded-sm hover:bg-gray-500'>
									<Link to='/signup'>Sign-Up</Link>
								</li>
							</>
						)}
					</ul>

					{/* Mobile Menu Button */}
					<button
						className='z-20 text-3xl md:hidden text-white'
						onClick={() => setShow(!show)}
					>
						{show ? <AiOutlineClose /> : <AiOutlineMenu />}
					</button>
				</nav>

				{/* Mobile Sidebar */}
				<ul
					className={`fixed top-0 right-0 z-10 w-full h-[70vh] bg-black flex flex-col items-center justify-center gap-5 transition-transform duration-300 ease-in-out ${
						show ? "translate-y-0" : "-translate-y-full"
					}`}
				>
					{cache ? (
						<>
							<li className='text-[#FFC107]'>
								<Link to={`/${cache.userId}`}>Profile</Link>
							</li>
							<li className='text-red-500 cursor-pointer' onClick={logOut}>
								Log-Out
							</li>
						</>
					) : (
						<>
							<li className='shadow-md p-3 bg-white text-black rounded-sm hover:bg-gray-200'>
								<Link to='/login'>Login</Link>
							</li>
							<li className='shadow-md p-3 bg-gray-600 text-white rounded-sm hover:bg-gray-500'>
								<Link to='/signup'>Sign-Up</Link>
							</li>
						</>
					)}
				</ul>
			</div>

			{/* Profile Info Section */}
			{cache && (
				<div className='h-[4rem] text-black w-full flex flex-col justify-center items-center sticky top-0 z-10 bg-gray-50'>
					<div className='w-full px-4'>
						<h2 className='font-bold text-xl'>{cache.name}</h2>
						<p className='font-bold'>Role: {cache.role}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
