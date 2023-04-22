import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

export default class extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&display=swap'
                        rel='preload'
                        as='style'
                        onload="this.onload=null;this.rel='stylesheet'"
                    />
                    <noscript>
                        <link
                            rel='stylesheet'
                            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&display=swap'
                        />
                    </noscript>
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/favicon-16x16.png'
                    />
                    <link rel='manifest' href='/site.webmanifest' />
                    <link
                        rel='mask-icon'
                        href='/safari-pinned-tab.svg'
                        color='#5bbad5'
                    />
                    <meta name='apple-mobile-web-app-title' content='sdb' />
                    <meta name='application-name' content='sdb' />
                    <meta name='msapplication-TileColor' content='#da532c' />
                    <meta name='theme-color' content='#ffffff' />
                    <meta name='robots' content='all' />
                    <meta name='googlebot' content='noindex,nofollow' />
                    <meta name='google' content='nositelinkssearchbox' />
                    <meta name='google' content='notranslate' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
