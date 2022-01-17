import GroceryHeader from "components/header/GroceryHeader"
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar"
import Navbar2 from "components/navbar/Navbar2"
import Sticky from "components/sticky/Sticky"
import Head from "next/head"
import React from "react"
import StyledAppLayout from "./AppLayoutStyle"

const GroceryLayout = ({
	children,
	title = "React Next.js Ecommerce Template",
}) => (
	<StyledAppLayout>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>

		<Sticky fixedOn={0}>
			<GroceryHeader />
		</Sticky>

		<div className="section-after-sticky">
			<Navbar2 />
		</div>

		{children}

		<MobileNavigationBar />
	</StyledAppLayout>
)

export default GroceryLayout
