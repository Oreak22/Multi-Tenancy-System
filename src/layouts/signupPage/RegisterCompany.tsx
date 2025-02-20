import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { FC } from "react";
interface FormState {
	companyDetails: any;
	state: React.Dispatch<React.SetStateAction<boolean>>;
	currentDetails: any;
}
const RegisterCompany: FC<FormState> = ({
	state,
	companyDetails,
	currentDetails,
}) => {
	return (
		<div className='w-[100%] py-2'>
			<Formik
				initialValues={{
					companyName: currentDetails.companyName,
					email: currentDetails.email,
					domain: currentDetails.domain,
				}}
				validate={(values) => {
					const errors: any = {};
					if (!values.companyName) {
						errors.companyName = "Required";
					}
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					if (!values.domain) {
						errors.domain = "Required";
					} else if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.domain)) {
						errors.domain = "Invalid domain name";
					}

					return errors;
				}}
				onSubmit={(values) => {
					companyDetails({
						companyName: values.companyName,
						email: values.email,
						domain: values.domain,
					});

					state(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className='w-[100%] py-2'>
							<label
								htmlFor='companyName'
								className='font-bold text-gray-700 block'
							>
								Company Name:
							</label>
							<Field
								className='w-[100%] my-2 border-b-1 outline-none'
								type='text'
								name='companyName'
								placeholder='Company Name'
							/>
							<ErrorMessage
								className='text-red-500'
								name='companyName'
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
								htmlFor='companyName'
								className='font-bold text-gray-700 block'
							>
								Domain:
							</label>
							<Field
								className='w-[100%] my-2 border-b-1 outline-none'
								type='text'
								name='domain'
								placeholder='(e.g. example.com, sub.example.co.uk)'
							/>
							<ErrorMessage
								className='text-red-500'
								name='domain'
								component='div'
							/>
						</div>

						<div className='w-[100%] text-center'>
							<button
								type='submit'
								className='bg-black w-[80%] cursor-pointer mx-auto hover:bg-[#FFC107]-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
								disabled={isSubmitting}
							>
								Submit
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterCompany;
