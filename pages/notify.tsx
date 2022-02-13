import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Layout } from '../components';

import LottieData from '../assets/notify.json';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

import { toast } from 'react-toastify';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const Notify: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Layout isProtested={true}>
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
          <Typography variant='h5' marginBottom='1rem'>
            Notify all employees to view their data
          </Typography>
          <Lottie
            options={defaultOptions}
            height='300px'
            width='300px'
            isStopped={false}
            isPaused={false}
            isClickToPauseDisabled={true}
          />

          <Button
            variant='contained'
            endIcon={<SendIcon />}
            sx={{ margin: '1.5rem 0' }}
            onClick={() =>
              toast.success('Employees have been notified through email', {
                position: toast.POSITION.TOP_RIGHT,
              })
            }
          >
            Notify All
          </Button>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Notify;
