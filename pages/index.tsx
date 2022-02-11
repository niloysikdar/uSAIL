import type { NextPage } from 'next';
import { Button, Switch } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <Switch />
      <Button variant='contained'>This is a button</Button>
    </div>
  );
};

export default Home;
