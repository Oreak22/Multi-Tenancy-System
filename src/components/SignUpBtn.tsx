import { FC } from "react";

interface Props {
	isSubmitting: boolean;
	adminDetails: any;
	companyDetails: any;
}

const SignUpBtn: FC<Props> = ({ isSubmitting }) => {
	return (
		<div>
			<div className='w-[100%] text-center'>
				<button
					type='submit'
					className='bg-black w-[80%] cursor-pointer mx-auto hover:bg-[#FFC107]-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
					disabled={isSubmitting}
				>
					{isSubmitting ? "Loading..." : "Register"}
				</button>
			</div>
		</div>
	);
};

export default SignUpBtn;
