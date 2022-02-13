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

const Compare: NextPage = () => {
  const [user1, setUser1] = useState('niloysikdar30@gmail.com');
  const [user2, setUser2] = useState('niloysikdar30@gmail.com');
  const [isLoading, setIsloading] = useState(false);

  const handleCompare = async () => {
    setIsloading(true);
    await new Promise((r) => setTimeout(r, 2000));
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
                <MenuItem value='niloysikdar30@gmail.com'>niloysikdar30@gmail.com</MenuItem>
                <MenuItem value='anubhabsarkar@gmail.com'>anubhabsarkar@gmail.com</MenuItem>
                <MenuItem value='testuser@gmail.com'>testuser@gmail.com</MenuItem>
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
                <MenuItem value='niloysikdar30@gmail.com'>niloysikdar30@gmail.com</MenuItem>
                <MenuItem value='anubhabsarkar@gmail.com'>anubhabsarkar@gmail.com</MenuItem>
                <MenuItem value='testuser@gmail.com'>testuser@gmail.com</MenuItem>
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
        <Grid
          container
          rowSpacing={{ xs: 4, md: 6 }}
          columnSpacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 4, lg: 8 }}
          padding='2rem 0'
        >
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <PrivateUserCard />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <PrivateUserCard />
          </Grid>

          <Chart1 />
          <Chart1 />

          <Chart2 />
          <Chart2 />

          <Chart3 />
          <Chart3 />

          <Chart4 />
          <Chart4 />

          <Chart5 />
          <Chart5 />

          <AppraisalMeter />
          <AppraisalMeter />
        </Grid>
      )}
    </Layout>
  );
};

export default Compare;
