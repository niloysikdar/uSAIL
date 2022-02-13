import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Layout, TeamCard } from '../components';

import { DepartmentsData } from '../utils';

const Select: NextPage = () => {
  return (
    <Layout isProtested={true}>
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
