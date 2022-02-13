import type { NextPage } from 'next';
import { useState } from 'react';
import {
  AppraisalMeter,
  Chart1,
  Chart2,
  Chart3,
  Chart4,
  Chart5,
  Layout,
  PrivateUserCard,
} from '../components';
import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { UserData } from '../data/UserData';
import { UserType } from '../types';

const allEmails = UserData.map((user) => user.email);
const Compare: NextPage = () => {
  const [user1, setUser1] = useState(allEmails[0]);
  const [user2, setUser2] = useState(allEmails[0]);

  const [isLoading, setIsloading] = useState(false);
  const [userData1, setUserData1] = useState<UserType>();
  const [userData2, setUserData2] = useState<UserType>();

  const handleCompare = async () => {
    setIsloading(true);
    await new Promise((r) => setTimeout(r, 2000));
    const res1 = UserData.filter((item) => item.email === user1)[0];
    setUserData1(res1);
    const res2 = UserData.filter((item) => item.email === user2)[0];
    setUserData2(res2);
    setIsloading(false);
  };

  return (
    <Layout>
      <Typography variant='h4' textAlign='center'>
        Compare Between 2 Employees
      </Typography>

      <Grid
        container
        columnSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 4, lg: 8 }}
        marginTop='2rem'
      >
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Paper
            style={{
              display: 'flex',
              width: 'fit-content',
              alignItems: 'center',
              padding: '10px 20px',
            }}
          >
            <Typography variant='h6' marginRight='20px'>
              Employee 1
            </Typography>
            <FormControl>
              <InputLabel id='user1'>Email</InputLabel>
              <Select
                labelId='user1'
                value={user1}
                label='Email'
                onChange={(e) => setUser1(e.target.value)}
              >
                {allEmails.map((email) => (
                  <MenuItem key={email} value={email}>
                    {email}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Paper
            style={{
              display: 'flex',
              width: 'fit-content',
              alignItems: 'center',
              padding: '10px 20px',
            }}
          >
            <Typography variant='h6' marginRight='20px'>
              Employee 2
            </Typography>
            <FormControl>
              <InputLabel id='user2'>Email</InputLabel>
              <Select
                labelId='user2'
                value={user2}
                label='Email'
                onChange={(e) => setUser2(e.target.value)}
              >
                {allEmails.map((email) => (
                  <MenuItem key={email} value={email}>
                    {email}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>

      <Container style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
        <Container style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}></Container>
      </Container>

      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={handleCompare}>
          Compare
        </Button>
      </Container>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '5rem 0' }}>
          <CircularProgress size={60} />
        </Box>
      ) : (
        userData1 &&
        userData2 && (
          <Grid
            container
            rowSpacing={{ xs: 4, md: 6 }}
            columnSpacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 4, lg: 8 }}
            padding='2rem 0'
          >
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <PrivateUserCard data={userData1} />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <PrivateUserCard data={userData2} />
            </Grid>

            <Chart1 values={userData1.data[0]} />
            <Chart1 values={userData2.data[0]} />

            <Chart2 values={userData1.data[1]} />
            <Chart2 values={userData2.data[1]} />

            <Chart3 values={userData1.data[2]} />
            <Chart3 values={userData2.data[2]} />

            <Chart4 values={userData1.data[3]} />
            <Chart4 values={userData2.data[3]} />

            <Chart5 values={userData1.data[4]} />
            <Chart5 values={userData2.data[4]} />

            <AppraisalMeter isAdmin={true} appraisal={userData1.appraisal} />
            <AppraisalMeter isAdmin={true} appraisal={userData2.appraisal} />
          </Grid>
        )
      )}
    </Layout>
  );
};

export default Compare;
