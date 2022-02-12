import type { NextPage } from 'next';
import { Box, Grid, Typography } from '@mui/material';
import { Layout, TeamCard } from '../components';

const DepartmentsData = [
  {
    value: 'Engineering',
    teamName: 'Engineering Team',
    image: require('../assets/engineering.svg'),
  },
  {
    value: 'Marketing',
    teamName: 'Marketing Team',
    image: require('../assets/marketing.svg'),
  },
  {
    value: 'Operations',
    teamName: 'Operations Team',
    image: require('../assets/operations.svg'),
  },
  {
    value: 'Customer Support',
    teamName: 'Customer Support',
    image: require('../assets/customer_support.svg'),
  },
];

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
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Select;
