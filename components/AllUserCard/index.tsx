import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NotificationsRounded from '@mui/icons-material/NotificationsRounded';
import ShareRounded from '@mui/icons-material/ShareRounded';
import VisibilityRounded from '@mui/icons-material/VisibilityRounded';

const AllUserCard = () => {
  return (
    <Card>
      <Stack direction='row' alignItems='center'>
        <Avatar
          src='https://randomuser.me/api/portraits/med/men/7.jpg'
          sx={{ height: '100px', width: '100px', marginLeft: '20px' }}
        />

        <Container style={{ marginTop: '8px' }}>
          <Typography variant='h6' fontWeight='600'>
            Name: Niloy Sikdar
          </Typography>
          <Typography variant='body1' fontWeight='600'>
            Age: 20, Gender: Male
          </Typography>
          <Typography variant='body1' fontWeight='600'>
            Engineering Team
          </Typography>

          <Typography variant='body1' fontWeight='600' marginTop='8px'>
            Email: niloysikdar30@gmail.com
          </Typography>
          <Typography variant='body1' fontWeight='600'>
            Access Key: kw3456fhjs8679j
          </Typography>

          <Typography variant='subtitle1' fontWeight='600' marginTop='8px'>
            Appraisal Score: 90/100
          </Typography>

          <Stack spacing={2} direction='row' margin='0.5rem 0'>
            <IconButton>
              <VisibilityRounded color='primary' />
            </IconButton>

            <IconButton>
              <ShareRounded color='primary' />
            </IconButton>

            <IconButton>
              <NotificationsRounded color='primary' />
            </IconButton>
          </Stack>
        </Container>
      </Stack>
    </Card>
  );
};

export { AllUserCard };
