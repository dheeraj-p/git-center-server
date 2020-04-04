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
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
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
