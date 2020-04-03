import Home from '../components/Home/Home';
import Head from 'next/head'
import GlobalStyles from '../styles/Global.style';

export default function Index() {
  return (
    <div>
      <Head>
        <title>My styled page</title>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossorigin='anonymous'
        />
      </Head>
      <Home />
      {/* <style jsx>{GlobalStyles}</style> */}
    </div>
  );
}
