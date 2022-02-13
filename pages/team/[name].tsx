import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Layout, AllUserCard } from '../../components';
import { UserData } from '../../data/UserData';
import { UserDetailsType } from '../../types';

const TeamDetails: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [users, setUsers] = useState<UserDetailsType[]>();

  useEffect(() => {
    if (name) {
      const res = UserData.filter((user) => user.teamKey === name);
      setUsers(res);
    }
  }, [name]);

  return (
    <Layout>
      <Typography variant='h4'>{name}</Typography>

      <Box display='flex' flexWrap='wrap' gap='2.5rem' marginTop='2rem'>
        {users?.map((user) => (
          <AllUserCard key={user.id} data={user} />
        ))}
      </Box>
    </Layout>
  );
};

export default TeamDetails;
