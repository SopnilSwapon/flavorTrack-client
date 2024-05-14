import Lottie from "lottie-react";
import messages from '../../assets/Animation - 1715676825263.json'
const Contact = () => {
    return (
        <section className="py-6 pt-24 min-h-[calc(100vh-150px)] bg-green-200 dark:text-gray-900">
	<div className="">
	<Lottie animationData={messages} className="w-[150px] mx-auto md:col-span-2 lg:col-span-2 left-24 z-0"></Lottie>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-10 w-[90%] mx-auto">
			<div className="space-y-4 w-full mx-auto mt-10 text-center">
			<h1 className="text-4xl font-bold">Contact Us</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<p className="flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-2.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>flavertrack@gmail.com</span>
				</p>
				<p className="flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span className="text-center">Bonossri, Dhaka</span>
				</p>
				<p className="flex items-center justify-center mr-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				
			</div>
		<form noValidate="" className="">
			<div>
			<label className="block pb-3">
				<span className="mb-1 font-bold">Full name : </span>
				<input type="text" placeholder="type your name" className="block w-full rounded-md px-3 py-2 pl-3" />
			</label>
			<label className="block pb-3">
				<span className="mb-1 font-bold">Email : </span>
				<input type="text" placeholder="type your email" className="block w-full rounded-md px-3 py-2 pl-3" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="2" className="block w-full rounded-md py-5"></textarea>
			</label>
			<button type="button" className="btn mt-4 btn-primary">Submit</button>
			</div>
		</form>
        </div>
	</div>
</section>
    );
};

export default Contact;