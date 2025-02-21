import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserCache {
	userId: string;
	name: string;
	role: string;
}

const Navbar = () => {
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
			<div className='bg-black h-[5rem] w-full flex flex-col justify-center items-center z-10'>
				<nav className='container flex justify-between items-center px-4 lg:px-6'>
					<Link
						to={cache ? `/${cache.userId}` : "/"}
						className='flex items-center text-3xl font-bold text-white'
					>
						<span className='text-[#FFC107]'>Multi</span>Ten
					</Link>

					{/* Desktop Navigation */}
					<ul className='flex items-center gap-5 text-white'>
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
				</nav>
			</div>

			{/* Profile Info Section */}
			{cache && (
				<div className='h-[4rem] text-black w-full flex flex-col justify-center items-center sticky top-0 z-10 bg-gray-50'>
					<div className='w-full px-4'>
						<h2 className='font-bold text-xl'>{cache.name}</h2>
						<p className='font-bold'>
							Role: <span className='font-light capitalize'>{cache.role}</span>
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
