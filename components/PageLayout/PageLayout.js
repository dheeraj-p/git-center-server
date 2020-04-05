import { Fragment } from 'react';
import Head from 'next/head';
import GlobalStyles from '../../styles/global.style';
import Header from '../Header/Header';

export default function PageLayout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <Header />
        {children}
      </div>
      <style jsx>{GlobalStyles}</style>
    </Fragment>
  );
}
