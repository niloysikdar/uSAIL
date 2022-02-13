import type { NextPage } from 'next';
import { useState, FormEventHandler } from 'react';
import Link from 'next/link';
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
import { UserData } from '../data/UserData';
import { UserType } from '../types';

const ViewScore: NextPage = () => {
  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormdata] = useState({ email: '', accessKey: '' });
  const [userData, setUserdata] = useState<UserType>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsloading(true);
    await new Promise((r) => setTimeout(r, 2000));
    const res = UserData.filter(
      (user) => user.email === formData.email && user.accessKey === formData.accessKey,
    )[0];
    setUserdata(res);
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
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              type='email'
              required
              value={formData.email}
              onChange={(e) =>
                setFormdata((data) => {
                  return { ...data, email: e.target.value };
                })
              }
            />
            <TextField
              label='Access Key'
              variant='outlined'
              fullWidth
              type='text'
              required
              sx={{ marginTop: '1.2rem' }}
              value={formData.accessKey}
              onChange={(e) =>
                setFormdata((data) => {
                  return { ...data, accessKey: e.target.value };
                })
              }
            />
            <Button type='submit' variant='contained' sx={{ marginTop: '1.5rem' }}>
              Submit
            </Button>
          </Box>

          <Typography variant='h6'>Are you an admin?</Typography>
          <Link href='/' passHref>
            <Typography style={{ cursor: 'pointer', color: 'blue' }}>View here</Typography>
          </Link>
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
                <Avatar src={userData.image} sx={{ height: '100px', width: '100px' }} />
                <Box>
                  <Typography variant='h5'>Name: {userData.name}</Typography>
                  <Typography variant='h6'>
                    Age: {userData.age}, Gender: {userData.gender}
                  </Typography>
                  <Typography variant='h6'>{userData.teamName}</Typography>
                </Box>
              </Stack>

              <Stack direction='row' spacing={2} marginTop='1.5rem'>
                <AppraisalMeter appraisal={userData.appraisal} />

                <Container style={{ marginLeft: '50px', paddingRight: '0' }}>
                  <CategoryData
                    categoryName={userData.data[0].name}
                    score={userData.data[0].score}
                    remarks={userData.data[0].remark}
                  />
                </Container>
              </Stack>

              <Stack direction='row' spacing={5} marginTop='1.5rem'>
                <CategoryData
                  categoryName={userData.data[1].name}
                  score={userData.data[1].score}
                  remarks={userData.data[1].remark}
                />

                <CategoryData
                  categoryName={userData.data[2].name}
                  score={userData.data[2].score}
                  remarks={userData.data[2].remark}
                />
              </Stack>

              <Stack direction='row' spacing={5} marginTop='1.5rem'>
                <CategoryData
                  categoryName={userData.data[3].name}
                  score={userData.data[3].score}
                  remarks={userData.data[3].remark}
                />

                <CategoryData
                  categoryName={userData.data[4].name}
                  score={userData.data[4].score}
                  remarks={userData.data[4].remark}
                />
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

const CategoryData = ({
  categoryName,
  score,
  remarks,
}: {
  categoryName: string;
  score: number;
  remarks: string;
}) => {
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
      <Typography variant='body2' maxWidth='170px' textAlign='center'>
        {categoryName}
      </Typography>
      <EmojiEventsIcon color='primary' fontSize='large' />
      <Typography variant='subtitle2'>Score: {score}</Typography>
      <Typography variant='body2' marginBottom='0.4rem'>
        {remarks}
      </Typography>
    </Paper>
  );
};

export default ViewScore;
