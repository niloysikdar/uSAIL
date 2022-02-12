import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Layout, UserCard } from '../../components';

const TeamDetails: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [teamName, setTeamName] = useState('Loading...');

  return (
    <Layout>
      <Typography variant='h4'>{name}</Typography>

      <Box display='flex' flexWrap='wrap' gap='2.2rem' marginTop='2rem'>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Box>
    </Layout>
  );
};
``;

export default TeamDetails;
