import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Main = ({ children }: any) => {
	return (
		<div className="relative inset-0 z-40 flex flex-col w-full overflow-x-hidden text-black font-inter">
			<Header />
			<main className="relative">{children}</main>
			<Footer />
		</div>
	);
};

export default Main;
