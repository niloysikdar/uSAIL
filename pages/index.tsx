import type { NextPage } from 'next';
import Link from 'next/link';
import { FormEventHandler } from 'react';
import { Layout } from '../components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Home: NextPage = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Box display='flex' justifyContent='center'>
        <Paper
          style={{
            width: 'fit-content',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5'>Login with Admin account to access the Dashboard</Typography>

          <Box
            component='form'
            noValidate
            autoComplete='off'
            width='300px'
            margin='1rem 0'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            onSubmit={handleSubmit}
          >
            <TextField label='Email' variant='outlined' fullWidth type='email' required />
            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              type='password'
              required
              style={{ marginTop: '1rem' }}
            />
            <Button type='submit' variant='contained' sx={{ marginTop: '1.5rem' }}>
              Submit
            </Button>
          </Box>

          <Typography variant='h6'>Are you an employee?</Typography>
          <Link href='/viewscore' passHref>
            <Typography style={{ cursor: 'pointer', color: 'blue' }}>View data here</Typography>
          </Link>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;
