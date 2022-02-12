import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PrivateUserCard = () => {
  return (
    <Paper style={{ width: 'fit-content', padding: '15px 25px' }}>
      <Stack direction='row' spacing={5} alignItems='center'>
        <Avatar
          src='https://randomuser.me/api/portraits/med/men/7.jpg'
          sx={{ height: '100px', width: '100px' }}
        />
        <Box>
          <Typography variant='h5'>Name: Niloy Sikdar</Typography>
          <Typography variant='h6'>Age: 20, Gender: Male</Typography>
          <Typography variant='h6'>Engineering Team</Typography>

          <Typography variant='subtitle1' marginTop='8px'>
            Email: niloysikdar30@gmail.com
          </Typography>
          <Typography variant='subtitle1'>Access Key: hd54hf7596jsdge</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export { PrivateUserCard };
