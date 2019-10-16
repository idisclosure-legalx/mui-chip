import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import NextApp from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

class App extends NextApp {
  static async getInitialProps(appCtx) {
    let pageProps = {};

    if (appCtx.Component.getInitialProps) {
      pageProps = await appCtx.Component.getInitialProps(appCtx.ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Chip Testing</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component pageContext={this.pageContext} {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
