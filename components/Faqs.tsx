import React from "react";
import { Disclosure } from "@headlessui/react";

const Faqs = () => {
	return (
		<div className="bg-[#F4F9FF]">
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="flex flex-col">
					<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-3xl sm:leading-none">
						FAQs: Phishing URL Checker
					</h2>
					<div className="flex flex-col items-center justify-center w-full">
						<div className="w-full sm:max-w-2xl">
							<Disclosure as="div" className="mt-10 font-sans">
								{({ open }) => (
									<>
										<Disclosure.Button className="flex justify-between w-full focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
											<span className="inline-flex justify-start mb-5 text-3xl font-bold text-left sm:text-lg">
												What is a phishing link?
											</span>
											<span className="justify-end">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													className={`${
														open ? "rotate-180 transform" : ""
													} h-5 w-5 text-purple-500`}
												>
													<path fill="none" d="M0 0h24v24H0z" />
													<path
														d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
														fill=""
													/>
												</svg>
											</span>
										</Disclosure.Button>
										<Disclosure.Panel className="w-full px-4 pt-4 pb-2 text-base font-medium leading-6 text-left text-black bg-white">
											A phishing link is a malicious link that cyber criminals
											use to obtain sensitive information from users. These
											links are delivered through social engineering attacks to
											steal user&rsquo;s data. This can include some really
											important and personal information like login credentials,
											employee ID/password, and credit card numbers.
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-10 font-sans">
								{({ open }) => (
									<>
										<Disclosure.Button className="flex justify-between w-full focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
											<span className="inline-flex justify-start mb-5 text-3xl font-bold text-left sm:text-lg">
												How to identify a phishing links?
											</span>
											<span className="justify-end">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													className={`${
														open ? "rotate-180 transform" : ""
													} h-5 w-5 text-purple-500`}
												>
													<path fill="none" d="M0 0h24v24H0z" />
													<path
														d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
														fill=""
													/>
												</svg>
											</span>
										</Disclosure.Button>
										<Disclosure.Panel className="w-full px-4 pt-4 pb-2 text-base font-medium leading-6 text-left text-black bg-white">
											Before clicking on any links that look suspicious,
											it&rsquo;s always wise to make sure that the link is safe.
											However, identifying a phishing link can be a challenging
											task. You can look for the destination of the link by
											hovering over the link. Moreover, to make sure the link is
											legitimate, you can also use our Phishing Link Checker.
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-10 font-sans">
								{({ open }) => (
									<>
										<Disclosure.Button className="flex justify-between w-full focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
											<span className="inline-flex justify-start mb-5 text-3xl font-bold text-left sm:text-lg">
												How to avoid falling for a phishing link?
											</span>
											<span className="justify-end">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													className={`${
														open ? "rotate-180 transform" : ""
													} h-5 w-5 text-purple-500`}
												>
													<path fill="none" d="M0 0h24v24H0z" />
													<path
														d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
														fill=""
													/>
												</svg>
											</span>
										</Disclosure.Button>
										<Disclosure.Panel className="w-full px-4 pt-4 pb-2 text-base font-medium leading-6 text-left text-black bg-white">
											The best way to avoid becoming a phishing victim is to be
											aware of the attack vector and gain an understanding of
											how it works. In order to keep its employees updated with
											this much required information, a company should provide
											phishing awareness training and run a phishing attack
											simulation on every employee. This will help them learn
											how to spot and avoid phishing links easily.
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
