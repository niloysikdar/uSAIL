import dynamic from 'next/dynamic';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart4 = () => {
  const [data4, setData4] = useState({
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        id: 'chart4',
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Weekly analysis',
      },
      colors: ['#5e3bbe'],
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  });

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', padding: '20px' }}>
        <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
          4. Email and Media Monitoring
        </Typography>
        <Chart options={data4.options} series={data4.series} type='line' width={500} height={320} />
      </Paper>
    </Grid>
  );
};

export { Chart4 };
