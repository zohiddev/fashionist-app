import Head from "next/head"
import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import MobileNavigationBar from "../mobile-navigation/MobileNavigationBar"
import Navbar from "../navbar/Navbar"
import Topbar from "../topbar/Topbar"
import StyledAppLayout from "./AppLayoutStyle"

const SaleLayout1 = ({ children, title = "Multivendor Ecommerce | Sale" }) => (
	<StyledAppLayout>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<Topbar />
		<Header />
		<Navbar />
		{children}
		<MobileNavigationBar />
		<Footer />
	</StyledAppLayout>
)

export default SaleLayout1
