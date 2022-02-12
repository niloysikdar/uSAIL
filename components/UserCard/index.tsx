import { NotificationsRounded, ShareRounded, VisibilityRounded } from '@mui/icons-material';
import { Card, Container, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const UserCard = () => {
  return (
    <Card>
      <Image
        src='https://randomuser.me/api/portraits/med/men/7.jpg'
        width='300px'
        height='180px'
        objectFit='cover'
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
            <VisibilityRounded />
          </IconButton>

          <IconButton>
            <ShareRounded />
          </IconButton>

          <IconButton>
            <NotificationsRounded />
          </IconButton>
        </Stack>
      </Container>
    </Card>
  );
};

export { UserCard };
