import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import {
  Chart1,
  Chart2,
  Chart3,
  Chart4,
  Chart5,
  AppraisalMeter,
  Layout,
  PrivateUserCard,
} from '../../components';

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Grid
        container
        rowSpacing={{ xs: 4, md: 6 }}
        columnSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 4, lg: 8 }}
      >
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <PrivateUserCard />
        </Grid>

        <AppraisalMeter />

        <Chart1 />

        <Chart2 />

        <Chart3 />

        <Chart4 />

        <Chart5 />
      </Grid>
    </Layout>
  );
};

export default User;
