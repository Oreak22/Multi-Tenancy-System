import { useEffect, useState } from "react";
import RegisterCompany from "../layouts/signupPage/RegisterCompany";
import { AiOutlineCheck } from "react-icons/ai";
import Navbar from "../components/Navbar";
import AdminForm from "../layouts/signupPage/AdminForm";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [registerCompany, setregisterCompany] = useState(true);
	const [companyDetails, setcompanyDetails] = useState<object>({});
	const [ErrorMessage, setErrorMessage] = useState("");
	useEffect(() => {
		setErrorMessage("");
	}, [registerCompany]);
	return (
		<>
			<Navbar  />
			{ErrorMessage && (
				<div className='bg-red-500 text-white text-center p-2'>
					{ErrorMessage}
				</div>
			)}
			<div className='w-full h-full flex flex-col justify-center items-center min-h-screen '>
				<div className=' w-[90%] md:max-w-[500px] mx-auto'>
					<h2 className='font-bold text-3xl mb-4 text-center'>
						Set up a workspace
					</h2>
					{/*  */}
					<div className='flex justify-evenly items-center my-4'>
						{/*  */}
						<div className='flex flex-col items-center'>
							<h3>Step</h3>
							<div
								className={
									registerCompany
										? "rounded-full border-2 border-black w-7 h-7 flex justify-center items-center bg-black"
										: "rounded-full border-2 border-black w-7 h-7 flex justify-center items-center"
								}
								onClick={() => setregisterCompany(true)}
							>
								{registerCompany ? (
									<span className='text-white'>1</span>
								) : (
									<AiOutlineCheck />
								)}
							</div>

							<div className='flex flex-col items-center'>
								<h3 className='font-bold'>Register Company</h3>
							</div>
						</div>
						{/*  */}
						<div className='flex flex-col items-center'>
							<h3>Step</h3>
							<div
								className={
									!registerCompany
										? "rounded-full border-2 border-black w-7 h-7 flex justify-center items-center bg-black"
										: "rounded-full border-2 border-black w-7 h-7 flex justify-center items-center"
								}
							>
								{!registerCompany ? <span className='text-white'>2</span> : 2}
							</div>
							<h3 className='font-bold'>Admin Details</h3>
						</div>
					</div>
					{registerCompany ? (
						<RegisterCompany
							state={setregisterCompany}
							companyDetails={setcompanyDetails}
              currentDetails={companyDetails}
						/>
					) : (
						<AdminForm
							companyDetails={companyDetails}
							erroMessage={setErrorMessage}
						/>
					)}
					<p className='text-center'>
						or <br />
						<Link className='font-bold text-underline' to='/login'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default SignUp;
