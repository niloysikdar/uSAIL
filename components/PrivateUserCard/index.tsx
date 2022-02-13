import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { UserType } from '../../types';

const PrivateUserCard = ({ data }: { data: UserType }) => {
  return (
    <Paper style={{ width: 'fit-content', padding: '15px 25px' }}>
      <Stack direction='row' spacing={5} alignItems='center'>
        <Avatar src={data.image} sx={{ height: '100px', width: '100px' }} />
        <Box>
          <Typography variant='h5'>Name: {data.name}</Typography>
          <Typography variant='h6'>
            Age: {data.age}, Gender: {data.gender}
          </Typography>
          <Typography variant='h6'>{data.teamName}</Typography>

          <Typography variant='subtitle1' marginTop='8px'>
            Email: {data.email}
          </Typography>
          <Typography variant='subtitle1'>Access Key: {data.accessKey}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export { PrivateUserCard };
