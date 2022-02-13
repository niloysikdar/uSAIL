import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Layout, AllUserCard } from '../../components';
import { UserData } from '../../data/UserData';
import { UserDetailsType } from '../../types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const TeamDetails: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [teamName, setTeamName] = useState('');
  const [users, setUsers] = useState<UserDetailsType[]>();

  useEffect(() => {
    if (name) {
      const res = UserData.filter((user) => user.teamKey === name);
      setTeamName(res[0].teamName);
      setUsers(res);
    }
  }, [name]);

  return (
    <Layout isProtested={true}>
      <Stack direction='row' alignItems='center' spacing={2}>
        <Typography variant='h4'>{teamName}</Typography>

        <label htmlFor='contained-button-file'>
          <Input accept='image/*' id='contained-button-file' multiple type='file' />
          <Button variant='contained' component='span'>
            Upload New Data
          </Button>
        </label>
      </Stack>

      <Box display='flex' flexWrap='wrap' gap='2.5rem' marginTop='2rem'>
        {users?.map((user) => (
          <AllUserCard key={user.id} data={user} />
        ))}
      </Box>
    </Layout>
  );
};

export default TeamDetails;
