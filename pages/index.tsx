import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Button variant='contained'>This is a button</Button>
      <Typography variant='h2'>This is a typography</Typography>
    </div>
  );
};

export default Home;
