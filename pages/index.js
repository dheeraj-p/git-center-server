import Home from '../components/Home/Home';
import Head from 'next/head';
import GlobalStyles from '../styles/global.style';
import fetch from 'isomorphic-unfetch';

export default function Index({ repositories }) {
  return (
    <div>
      <Head>
        <title>My styled page</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <Home repositories={repositories} />
      <style jsx>{GlobalStyles}</style>
    </div>
  );
}

export async function getServerSideProps(_ctx) {
  const response = await fetch(
    'http://localhost:3000/api/repositories'
  ).then(res => res.json());

  const { repositories } = response.data;
  return { props: { repositories } };
}
