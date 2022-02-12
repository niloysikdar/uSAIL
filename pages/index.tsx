import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <Button variant='contained'>This is a button</Button>
      <Typography variant='h2'>This is a typography</Typography>
    </Layout>
  );
};

export default Home;
