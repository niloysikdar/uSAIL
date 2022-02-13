import dynamic from 'next/dynamic';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CategoryDataType } from '../../types';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart1 = ({ values }: { values: CategoryDataType }) => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: 'chart1',
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      },
      title: {
        text: 'Weekly analysis',
      },
      colors: ['#5e3bbe'],
    },
    series: [
      {
        name: 'series-1',
        data: values.weeklyData,
      },
    ],
  });

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', padding: '20px' }}>
        <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
          1. {values.name} ({values.totalPoints}Pts)
        </Typography>
        <Chart options={data.options} series={data.series} type='bar' width={500} height={320} />
      </Paper>
    </Grid>
  );
};

export { Chart1 };
