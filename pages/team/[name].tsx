import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Layout, AllUserCard } from '../../components';

const TeamDetails: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [teamName, setTeamName] = useState('Loading...');

  return (
    <Layout>
      <Typography variant='h4'>{name}</Typography>

      <Box display='flex' flexWrap='wrap' gap='2.5rem' marginTop='2rem'>
        <AllUserCard />
        <AllUserCard />
        <AllUserCard />
        <AllUserCard />
        <AllUserCard />
        <AllUserCard />
      </Box>
    </Layout>
  );
};

export default TeamDetails;
