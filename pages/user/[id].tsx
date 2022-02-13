import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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
import { UserType } from '../../types';
import { UserData } from '../../data/UserData';

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    if (id) {
      const res = UserData.filter((user) => user.id === +id);
      setUser(res[0]);
    }
  }, [id]);

  return (
    <Layout>
      {user && (
        <Grid
          container
          rowSpacing={{ xs: 4, md: 6 }}
          columnSpacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 4, lg: 8 }}
        >
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <PrivateUserCard data={user} />
          </Grid>

          <AppraisalMeter isAdmin={true} appraisal={user.appraisal} />

          <Chart1 values={user.data[0]} />

          <Chart2 values={user.data[1]} />

          <Chart3 values={user.data[2]} />

          <Chart4 values={user.data[3]} />

          <Chart5 values={user.data[4]} />
        </Grid>
      )}
    </Layout>
  );
};

export default User;
