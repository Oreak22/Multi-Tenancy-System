import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import spaceDetail from "../utils/apiCalls/spaceDetail";

const Dashboard = () => {
	const { id } = useParams();

	useEffect(() => {
		try {
			spaceDetail({ id });
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<>
			<Navbar />
			<div className='w-full min-h-screen'>
				<div className='flex items-center g-4 justify-center h-screen'>
					<div className='h-[100%] md:w-[20%] lg:w-[20%] shadow-sm p-8 bg-gray-50'>
						{/*  */}
						<div className='w-100'></div>
					</div>
					<div className='h-[100%} md:w-[80%] md:w-[80%]  '></div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
