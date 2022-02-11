import type { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../components/Login/Login';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Login />
    </>
  );
};

export default Home;
