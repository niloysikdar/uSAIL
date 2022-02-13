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

import { toast } from 'react-toastify';

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
      setTeamName(res.length > 0 ? res[0].teamName : (name as string));
      setUsers(res);
    }
  }, [name]);

  return (
    <Layout isProtested={true}>
      <Stack direction='row' alignItems='center' spacing={2}>
        <Typography variant='h4'>{teamName}</Typography>

        <label htmlFor='contained-button-file'>
          <Input
            accept='.csv,.xls,.xlsx'
            id='contained-button-file'
            multiple={false}
            type='file'
            onChange={(e) => {
              if (e.target.files!.length > 0) {
                toast.warning("File Parsing isn't available on Beta", {
                  position: toast.POSITION.TOP_RIGHT,
                });
              }
            }}
          />
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
