import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

// import './App.css'

function App() {
	return (
		<Routes>
			{/* auth */}
			<Route path='/' element={<LandingPage />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/login' element={<Login />} />

			{/* loggedIn */}
			<Route path='/:id' element={<Dashboard />} />
		</Routes>
	);
}

export default App;
