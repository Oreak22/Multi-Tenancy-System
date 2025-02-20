import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import spaceDetail from "../utils/apiCalls/spaceDetail";
import CreateUser from "../layouts/dashboard/CreateUser";
import EditUser from "../layouts/dashboard/EditUser";

const Dashboard = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [action, SetAction] = useState("edit");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await spaceDetail(id);
				setData(response);
			} catch (err) {
				setError("Error fetching data");
				console.error("Error fetching data:", err);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchData();
		}
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<Navbar />
			<div className='w-full min-h-screen'>
				<div className='flex items-center gap-4 justify-center h-screen w-full'>
					<div className={`w-[100%] min-h-screen py-10 px-5`}>
						<div>
							<p className='font-semibold text-gray-500'>Room:</p>
							<h1 className='font-bold text-2xl mb-4'>{data.tenant.name}</h1>
						</div>
						Welcome to the space{" "}
						<span className='font-bold'>{data.user.name}</span>
						<div className='mt-5'>
							{
								(data.user.role = "adim" && (
									<>
										<div>
											<ul className='flex items-center justify-evenly gap-4'>
												<li
													className='px-4 py-2 cursor-pointer rounded-sm border-2 border-[green]'
													onClick={() => SetAction("create")}
												>
													Create Users
												</li>
												<li
													className='px-4 py-2 cursor-pointer rounded-sm border-2 border-[yellow]'
													onClick={() => SetAction("edit")}
												>
													Edit Users
												</li>
												<li
													className='px-4 py-2 cursor-pointer rounded-sm border-2 border-[red]'
													onClick={() => SetAction("delete")}
												>
													Delete Space
												</li>
											</ul>
											<div className="mt-5">
												{action === "create" ? (
													<>
														<CreateUser />
													</>
												) : (
													action === "edit" ?<EditUser /> : '<DeleteUser />'
												)}
											</div>
										</div>
									</>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
