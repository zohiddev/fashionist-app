import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"
import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../utils/globalStyles"
import { theme } from "../utils/theme"
import { wrapper } from "store/store"
import AppLayout from "components/layout/AppLayout"
import "../assets/styles.scss"

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

NProgress.configure({ showSpinner: false })

const App = ({ Component, pageProps }) => {
	// let Layout = Component.layout || Fragment

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta property="og:url" content="https://sdb.uz" />
				{/* thumbnail And title for social media */}
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Samsung dexqon bozor - Onlayn do'kon"
				/>
				<meta
					property="og:description"
					content="Hamyonbop narxlarda minglab tovarlar: elektronika, smartfonlar, smart soatlar, maishiy texnikalar va poyabzal, kompyuterlar ...."
				/>
				<meta
					property="og:image"
					content="banner.jpg"
				/>

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-SGG7GE7HZC"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SGG7GE7HZC');
          `,
					}}
				></script>
			</Head>
			<GlobalStyles />
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ThemeProvider>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default wrapper.withRedux(App)
