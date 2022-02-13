import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEventHandler, useState } from 'react';
import { Layout } from '../components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { adminTest } from '../data/AdminTest';

const Home: NextPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formData.email === adminTest.email && formData.password === adminTest.password) {
      localStorage.setItem('role', adminTest.role);
      router.replace('/select');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((data) => {
      return { ...data, [e.target.id]: e.target.value };
    });
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
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              type='email'
              required
              value={formData.email}
              id='email'
              onChange={handleChange}
            />
            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              type='password'
              required
              style={{ marginTop: '1rem' }}
              id='password'
              value={formData.password}
              onChange={handleChange}
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
