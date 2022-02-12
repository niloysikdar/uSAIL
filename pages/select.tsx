import type { NextPage } from 'next';
import { Box, Grid, Typography } from '@mui/material';
import { Layout, TeamCard } from '../components';

import { DepartmentsData } from '../utils';

const Select: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h4' textAlign='center'>
        Select the Department
      </Typography>

      <Box display='flex' justifyContent='center' marginTop='2rem'>
        <Box maxWidth='600px'>
          <Grid container justifyContent='center' spacing={5}>
            {DepartmentsData.map((department) => (
              <TeamCard
                key={department.value}
                teamName={department.teamName}
                image={department.image}
                value={department.value}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Select;
