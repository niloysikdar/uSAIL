import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NotificationsRounded from '@mui/icons-material/NotificationsRounded';
import ShareRounded from '@mui/icons-material/ShareRounded';
import VisibilityRounded from '@mui/icons-material/VisibilityRounded';
import { UserDetailsType } from '../../types';

const AllUserCard = ({ data }: { data: UserDetailsType }) => {
  const router = useRouter();

  return (
    <Card>
      <Stack direction='row' alignItems='center'>
        <Avatar src={data.image} sx={{ height: '100px', width: '100px', marginLeft: '20px' }} />

        <Container style={{ marginTop: '8px' }}>
          <Typography variant='h6' fontWeight='600'>
            Name: {data.name}
          </Typography>
          <Typography variant='body1' fontWeight='600'>
            Age: {data.age}, Gender: {data.gender}
          </Typography>
          <Typography variant='body1' fontWeight='600'>
            {data.teamName}
          </Typography>

          <Typography variant='body1' fontWeight='600' marginTop='8px'>
            Email: {data.email}
          </Typography>
          <Typography variant='body1' fontWeight='600'>
            Access Key: {data.accessKey}
          </Typography>

          <Typography variant='subtitle1' fontWeight='600' marginTop='8px'>
            KPI Score: {data.kpiScore}/100
          </Typography>

          <Stack spacing={2} direction='row' margin='0.5rem 0'>
            <IconButton onClick={() => router.push(`/user/${data.id}`)}>
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
