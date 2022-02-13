import dynamic from 'next/dynamic';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart5 = () => {
  const [data, setData] = useState({
    series: [70],
    options: {
      chart: {
        id: 'chart5',
      },
      colors: ['#5e3bbe'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
        },
      },
      labels: ['Scoring Percentage'],
    },
  });

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', padding: '20px' }}>
        <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
          5. 3rd Party Application Usage Time Monitoring
        </Typography>
        <Chart
          options={data.options}
          series={data.series}
          type='radialBar'
          height={320}
          width={320}
        />
      </Paper>
    </Grid>
  );
};

export { Chart5 };
