import Footer from "components/footer/Footer"
import Header from "components/header/Header"
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar"
import Sticky from "components/sticky/Sticky"
import Topbar from "components/topbar/Topbar"
import Head from "next/head"
import React from "react"
import StyledAppLayout from "./AppLayoutStyle"

const AppLayout = ({
	categories,
	children,
	navbar,
	title = "Samsung dehqon bozor",
}) => (
	<StyledAppLayout>
		<header className="mainHeader">
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>

			<Topbar />

			<Sticky fixedOn={0}>
				<Header />
			</Sticky>
		</header>

		<main className="mainMain">
			{navbar && <div className="section-after-sticky">{navbar}</div>}
			{!navbar ? (
				<div className="section-after-sticky">{children}</div>
			) : (
				children
			)}
		</main>


		<footer className="mainFooter">
			<MobileNavigationBar />
			<Footer />
		</footer>
	</StyledAppLayout>
)

export default AppLayout
