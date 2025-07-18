import { Link } from "react-router-dom";

import { RiseUpWhenVisible } from "../../components/anims";

const ConnectSubSet = ({ heading, content }) => {
	return (
		<RiseUpWhenVisible>
			<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8">
				<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">{heading}</h2>
				<div className="flex justify-center">
					<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
				</div>
				<div className="flex flex-col md:grid-cols-2 justify-start m-0 sm:mt-4">
					{content.map((socialMediaTypes) => (
						<RiseUpWhenVisible key={socialMediaTypes.id}>
							<div className="w-full not-dark:font-semibold p-2">
								{/* Type of the Social Media */}
								<div className="w-fit">
									<span className="font-bold text-light dark:text-dark text-center text-base xs:text-lg md:text-xl">
										{socialMediaTypes.type}
									</span>
									<hr className="w-full border border-light dark:border-dark" />
								</div>
								<div className="w-fit flex flex-row flex-wrap gap-4 sm:gap-8 mt-4">
									{socialMediaTypes.socialMediaACs.map((social) => {
										return (
											<RiseUpWhenVisible key={social.id}>
												<Link to={social.account} target="_blank" className="w-fit flex flex-col justify-center items-center">
													<span className="">{social.icon}</span>
													{/* <span className="text-center text-sm sm:text-base lg:text-lg sm:p-2">{social.name}</span> */}
												</Link>
											</RiseUpWhenVisible>
										);
									})}
								</div>
							</div>
						</RiseUpWhenVisible>
					))}
				</div>
			</section>
		</RiseUpWhenVisible>
	);
};

export default ConnectSubSet;
