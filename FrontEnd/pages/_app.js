import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout'
import "../styles/style.css";


export default App;

function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <title>NextJS-CoinTracking</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    );
}