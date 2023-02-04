import Shield from "../public/images/shield.svg";

const About = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="flex flex-col lg:flex-row">
				<div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
					<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-black sm:text-3xl sm:leading-none">
						What Does Phishing URL <br /> Checker Do?
					</h2>
					<p className="text-lg leading-7 text-black">
						Phishing URL Checker detects malicious links instantly. It provides
						you with real-time results to help you detect if a URL is legitimate
						or a phishing link. So, don't fret if you come across any suspicious
						links. Just use this phishing link scanner to protect yourself
						against malicious links, phishing scams and suspicious websites.
					</p>
				</div>
				<div className="lg:w-1/2">
					<img
						className="w-full h-56 rounded shadow-lg sm:h-96"
						src={Shield.src}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
export default About;
