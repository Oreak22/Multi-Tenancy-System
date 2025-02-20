import Hero from "../layouts/landingPage/Hero";
import Navbar from "../components/Navbar";
import MiddlePage from "../layouts/landingPage/MiddlePage";

const LandingPage = () => {
	return (
		<>
			<Navbar  />
			<div className=''>
				<main className=''>
					<Hero />
                    <MiddlePage/>
				</main>
			</div>
		</>
	);
};

export default LandingPage;
