import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC, useState } from "react";
import login from "../../utils/apiCalls/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCache } from "../../utils/redux/golbalReducer";

interface Props {
	errorMessage: any;
}

const FormField: FC<Props> = ({ errorMessage }) => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<div className='w-[100%] py-2'>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validate={(values) => {
					const errors: any = {};
					if (!values.email) {
						errors.email = "Required";
					}
					if (!values.password) {
						errors.password = "Required";
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting }) => {
					setLoading(true);
					try {
						const responce = await login({
							email: values.email,
							password: values.password,
						});
						console.log(responce.cache);
						if (!responce.status) {
							errorMessage(responce.res.message);
						} else {
							dispatch(setCache(responce.cache));
							localStorage.setItem('multiten',JSON.stringify(responce.cache));
							navigate(`/${responce.cache.userId}`);
						}
					} catch (error) {
					} finally {
						setLoading(false);
						setSubmitting(false);
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
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

						<div className='w-[100%] text-center'>
							<button
								type='submit'
								className='bg-black w-[80%] cursor-pointer mx-auto hover:bg-[#FFC107]-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
								disabled={isSubmitting || loading}
							>
								{loading ? "Loading..." : "Login In"}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormField;
