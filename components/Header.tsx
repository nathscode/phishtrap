import Head from "next/head";
import React from "react";
import Nav from "./Nav";

const Header = () => {
	return (
		<div>
			<Head>
				<title>Phishtrap</title>
				<meta
					name="description"
					content="Check links for phishing in seconds"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Nav />
			</header>
		</div>
	);
};

export default Header;
