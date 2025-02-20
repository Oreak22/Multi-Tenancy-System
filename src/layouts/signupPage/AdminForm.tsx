import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC, useState } from "react";
import signUp from "../../utils/apiCalls/signUp";
import { useNavigate } from "react-router-dom";
interface FormState {
	companyDetails: object;
	erroMessage: any;
}
const AdminForm: FC<FormState> = ({ companyDetails, erroMessage }) => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	return (
		<div className='w-[100%] py-2'>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password: "",
					confirmPassword: "",
				}}
				validate={(values) => {
					const errors: any = {};
					if (!values.name) {
						errors.name = "Required";
					}
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					if (!values.password) {
						errors.password = "Required";
					} else if (
						!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(
							values.password,
						)
					) {
						errors.password = "Your password is weak";
					}
					if (!values.confirmPassword) {
						errors.confirmPassword = "Required";
					} else if (values.password !== values.confirmPassword) {
						errors.confirmPassword = "Password does not match";
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting }) => {
					setLoading(true);
					try {
						const updatedFormDetails = {
							name: values.name,
							email: values.email,
							password: values.password,
						};

						const responce = await signUp({
							companyDetails,
							formDetails: updatedFormDetails,
						});
						console.log(responce);
						if (!responce.status) {
							erroMessage(responce.res.message);
						}
						if (responce.status) {
							navigate("/login");
						}
					} catch (error) {
						console.error("Error:");
					} finally {
						setLoading(false);
						setSubmitting(false);
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className='w-[100l%] py-2'>
							<label htmlFor='name' className='font-bold text-gray-700 block'>
								Full Name:
							</label>
							<Field
								className='w-[100%] my-2 border-b-1 outline-none'
								type='text'
								name='name'
								placeholder='Enter Your Name'
							/>
							<ErrorMessage
								className='text-red-500'
								name='name'
								component='div'
							/>
						</div>

						<div className='w-[100%] py-2'>
							<label htmlFor='email' className='font-bold text-gray-700 block'>
								Email:
							</label>
							<Field
								className='w-[100%] my-2 border-b-1 outline-none'
								type='email'
								name='email'
								placeholder='Email'
							/>
							<ErrorMessage
								className='text-red-500'
								name='email'
								component='div'
							/>
						</div>

						<div className='w-[100%] py-2'>
							<label
								htmlFor='password'
								className='font-bold text-gray-700 block'
							>
								Password:
							</label>
							<Field
								className='w-[100%] my-2 border-b-1 outline-none'
								type='password'
								name='password'
								placeholder='Password'
							/>
							<ErrorMessage
								className='text-red-500'
								name='password'
								component='div'
							/>
						</div>
						<div className='w-[100%] py-2'>
							<label
								htmlFor='password'
								className='font-bold text-gray-700 block'
							>
								Confirm Password:
							</label>
							<Field
								className='w-[100%] my-2 border-b-1 outline-none'
								type='password'
								name='confirmPassword'
								placeholder='Re-enter Password'
							/>
							<ErrorMessage
								className='text-red-500'
								name='confirmPassword'
								component='div'
							/>
						</div>
						<div className='w-[100%] text-center'>
							<button
								type='submit'
								className='bg-black w-[80%] cursor-pointer mx-auto hover:bg-[#FFC107]-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
								disabled={isSubmitting || loading}
							>
								{loading ? "Loading..." : "Register"}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AdminForm;
