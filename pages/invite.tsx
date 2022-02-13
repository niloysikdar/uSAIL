import type { NextPage } from 'next';
import { FormEventHandler } from 'react';
import { Layout } from '../components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Invite: NextPage = () => {
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
          <Typography variant='h5'>Invite an admin to access the dashboard</Typography>

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
            <Button type='submit' variant='contained' sx={{ marginTop: '1.5rem' }}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Invite;
