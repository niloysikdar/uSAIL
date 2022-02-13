import type { NextPage } from 'next';
import { useState, FormEventHandler } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { AppraisalMeter } from '../components';

const ViewScore: NextPage = () => {
  const [isLoading, setIsloading] = useState(false);
  const [userData, setUserdata] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setUserdata(true);
    setIsloading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsloading(false);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='90vh'
    >
      <Typography variant='h4'>Employees, check your data here !</Typography>
      <Box display='flex' marginTop='2rem' gap='3rem'>
        <Paper elevation={5} style={{ padding: '15px 40px 15px 25px', height: 'fit-content' }}>
          <Typography variant='h6'>Enter the Credentials:</Typography>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            width='300px'
            margin='1rem 0'
            onSubmit={handleSubmit}
          >
            <TextField label='Email' variant='outlined' fullWidth type='email' required />
            <TextField
              label='Access Key'
              variant='outlined'
              fullWidth
              type='text'
              required
              sx={{ marginTop: '1.2rem' }}
            />
            <Button type='submit' variant='contained' sx={{ marginTop: '1.5rem' }}>
              Submit
            </Button>
          </Box>
        </Paper>

        <Paper elevation={5} style={{ padding: '15px 0 20px 25px' }}>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '5rem 0',
                height: '390px',
                width: '480px',
              }}
            >
              <CircularProgress size={60} />
            </Box>
          ) : userData ? (
            <>
              <Stack direction='row' spacing={5} alignItems='center'>
                <Avatar
                  src='https://randomuser.me/api/portraits/med/men/7.jpg'
                  sx={{ height: '100px', width: '100px' }}
                />
                <Box>
                  <Typography variant='h5'>Name: Niloy Sikdar</Typography>
                  <Typography variant='h6'>Age: 20, Gender: Male</Typography>
                  <Typography variant='h6'>Engineering Team</Typography>
                </Box>
              </Stack>

              <Stack direction='row' spacing={2} marginTop='1.5rem'>
                <AppraisalMeter />

                <Container style={{ marginLeft: '50px', paddingRight: '0' }}>
                  <CategoryData />
                </Container>
              </Stack>

              <Stack direction='row' spacing={5} marginTop='1.5rem'>
                <CategoryData />

                <CategoryData />
              </Stack>

              <Stack direction='row' spacing={5} marginTop='1.5rem'>
                <CategoryData />

                <CategoryData />
              </Stack>
            </>
          ) : (
            <div style={{ height: '550px', width: '480px' }}>
              <Typography variant='h5'>Submit the Credentials</Typography>
            </div>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

const CategoryData = () => {
  return (
    <Paper
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        padding: '10px 15px',
      }}
    >
      <Typography variant='body2'>1. Productivity Monitoring</Typography>
      <EmojiEventsIcon color='primary' fontSize='large' />
      <Typography variant='subtitle2'>Score: 30</Typography>
      <Typography variant='body2' marginBottom='0.4rem'>
        Highly Productive
      </Typography>
    </Paper>
  );
};

export default ViewScore;
