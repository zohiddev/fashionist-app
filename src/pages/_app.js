import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils/globalStyles";
import { theme } from "../utils/theme";
import { wrapper } from "store/store";
import AppLayout from "components/layout/AppLayout";
import "../assets/styles.scss";
import Script from "next/script";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: true });

const App = ({ Component, pageProps }) => {
    // let Layout = Component.layout || Fragment

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />
                <meta property='og:url' content='https://sdb.uz' />
                {/* thumbnail And title for social media */}
                <meta property='og:type' content='website' />
                <meta
                    property='og:title'
                    content="Samsung dexqon bozor - Onlayn do'kon"
                />
                <meta
                    property='og:description'
                    content='Hamyonbop narxlarda minglab tovarlar: elektronika, smartfonlar, smart soatlar, maishiy texnikalar va poyabzal, kompyuterlar ....'
                />
                <meta property='og:image' content='banner.jpg' />
            </Head>
            <GlobalStyles />
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </ThemeProvider>
    );
};

export default wrapper.withRedux(App);
