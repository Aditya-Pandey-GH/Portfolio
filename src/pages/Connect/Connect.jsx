import { useState, useRef, useEffect } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

import ConnectSubSet from "./ConnectSubSet";
import Cover from "../../components/Cover";
import { SocialContent } from "../../components/content";
import { RiseUpWhenVisible } from "../../components/anims";
import emailjs from "@emailjs/browser";

const Connect = () => {
	const form = useRef();
	// const [formData, setFormData] = useState({ fName: "", mName: "", lName: "", email: "", subject: "", message: "" });
	// const [formData, setFormData] = useState({ fName: "", lName: "", email: "", subject: "", message: "" });
	const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// FIXME: The limitRate doesn't work. Make it work
	useEffect(() => {
		emailjs.init({
			publicKey: import.meta.env.VITE_PUBLIC_KEY,
			blockHeadless: true,
			limitRate: {
				id: "connect",
				throttle: 10000,
			},
		});
	}, []);

	const submitForm = (e) => {
		e.preventDefault();
		// console.table(formData);
		// if (formData.fName === "" || formData.lName === "" || formData.email === "" || formData.subject === "" || formData.message === "")
		if (formData.name === "" || formData.email === "" || formData.subject === "" || formData.message === "")
			return toast.error("Please fill all the fields!");
		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current)
			.then((res) => {
				console.log(res);
				toast.success("Your mail has been sent :)");
			})
			.catch((err) => {
				console.error(err);
				toast.error("Something went wrong :(");
			});
	};

	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Connect */}
			<ConnectSubSet heading={"SOCIAL MEDIA"} content={SocialContent} />

			{/* Email */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">CONTACT ME</h2>
					</div>
					<div className="flex justify-center sm:mb-4">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-col justify-start items-center my-8 mx-4 leading-normal">
						<form ref={form} onSubmit={submitForm} method="post" className="w-full max-w-lg flex flex-col gap-4 border-2 p-4 rounded-2xl">
							<h3 className="font-bold text-light dark:text-dark text-lg xs:text-xl md:text-2xl text-center">CONTACT FORM</h3>

							{/* Name */}
							<InputBoxes
								type="text"
								id="name"
								name="name"
								placeholder="Name"
								value={formData.name}
								handleInputChange={handleInputChange}
							/>

							{/* <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
								<div className="relative w-full bg-neutral-100 dark:bg-neutral-800 autofill:bg-transparent px-4 py-3 rounded-md group border-2 not-focus-within:border-transparent transition-all">
									<input
										type="text"
										id="fName"
										name="fName"
										value={formData.fName}
										onChange={handleInputChange}
										maxLength={20}
										placeholder="First Name"
										autoComplete="off"
										className="w-full placeholder:text-black/50 dark:placeholder:text-white/50 autofill:bg-transparent text-[clamp(1rem,2dvw,1.1rem)]"
										required
									/>
								</div>
								
								<div className="relative w-full bg-neutral-100 dark:bg-neutral-800 autofill:bg-transparent px-4 py-3 rounded-md group border-2 not-focus-within:border-transparent transition-all">
									<input
										type="text"
										id="mName"
										name="mName"
										value={formData.mName}
										onChange={handleInputChange}
										maxLength={20}
										placeholder="Middle Name"
										autoComplete="off"
										className="w-full placeholder:text-black/50 dark:placeholder:text-white/50 autofill:bg-transparent text-[clamp(1rem,2dvw,1.1rem)]"
									/>
								</div>
								
								<div className="relative w-full bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-md group border-2 not-focus-within:border-transparent transition-all">
									<input
										type="text"
										id="lName"
										name="lName"
										value={formData.lName}
										onChange={handleInputChange}
										maxLength={20}
										placeholder="Last Name"
										autoComplete="off"
										className="w-full placeholder:text-black/50 dark:placeholder:text-white/50 autofill:bg-transparent text-[clamp(1rem,2dvw,1.1rem)]"
										required
									/>
								</div>
							</div> */}

							{/* Email ID */}
							<InputBoxes
								type="email"
								id="email"
								name="email"
								placeholder="Email ID"
								value={formData.email}
								handleInputChange={handleInputChange}
							/>

							{/* Subject */}
							<InputBoxes
								type="text"
								id="subject"
								name="subject"
								placeholder="Subject"
								value={formData.subject}
								handleInputChange={handleInputChange}
							/>

							{/* Message */}
							<TextArea
								id="message"
								name="message"
								placeholder="Type your mail"
								value={formData.message}
								handleInputChange={handleInputChange}
							/>

							{/* Submit Button */}
							<div className="flex justify-center">
								<button
									type="submit"
									className="w-fit h-fit  font-semibold px-8 py-2 rounded-md cursor-pointer border-2 border-light dark:border-dark text-light dark:text-dark hover:text-white hover:dark:text-black text-base md:text-lg hover:bg-light dark:hover:bg-dark transition-color duration-300 ease-in-out"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</section>
			</RiseUpWhenVisible>

			{/* React Toastify */}
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={localStorage.theme === "dark" ? "dark" : "light"}
				transition={Bounce}
			/>
		</>
	);
};

const InputBoxes = ({ type = "text", id, name, placeholder, value, handleInputChange }) => {
	return (
		<div className="w-full flex-1 bg-neutral-100 dark:bg-neutral-800 autofill:bg-transparent px-4 py-3 rounded-md group border-2 not-focus-within:border-transparent transition-all">
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
				autoComplete="off"
				className="w-full placeholder:text-black/50 dark:placeholder:text-white/50 text-base md:text-lg"
				required
			/>
		</div>
	);
};

const TextArea = ({ id, name, placeholder, value, handleInputChange }) => {
	return (
		<div className="relative bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-md group border-2 not-focus-within:border-transparent transition-all">
			<textarea
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
				autoComplete="off"
				className="w-full min-h-32 pr-2 placeholder:text-black/50 dark:placeholder:text-white/50 text-base md:text-lg resize-y text-justify"
				required
			/>
		</div>
	);
};

export default Connect;
