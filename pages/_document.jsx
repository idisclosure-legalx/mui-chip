import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" style={{ height: '100%', overflow: 'hidden' }}>
      <Head>
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <style>
          {`
              #__next {
                height: 100%;
                display: flex;
                flex-direction: column;
              }
              
              * {
                -webkit-overflow-scrolling: touch;
              }
              
              a {
                text-decoration: none;
              }
            `}
        </style>
      </Head>
      <body style={{ height: '100%' }}>
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: <React.Fragment>{sheets.getStyleElement()}</React.Fragment>,
  };
};

export default MyDocument;
