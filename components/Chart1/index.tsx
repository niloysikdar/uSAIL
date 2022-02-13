import dynamic from 'next/dynamic';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart1 = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: 'apexchart-example',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      title: {
        text: 'Weekly analysis',
      },
      colors: ['#5e3bbe'],
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', padding: '20px' }}>
        <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
          1. Productivity Monitoring (30Pts)
        </Typography>
        <Chart options={data.options} series={data.series} type='bar' width={500} height={320} />
      </Paper>
    </Grid>
  );
};

export { Chart1 };
