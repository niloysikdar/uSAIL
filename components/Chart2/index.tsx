import dynamic from 'next/dynamic';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CategoryDataType } from '../../types';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart2 = ({ values }: { values: CategoryDataType }) => {
  const [data, setData] = useState({
    series: [
      {
        name: 'series1',
        data: values.weeklyData,
      },
    ],
    options: {
      chart: {
        id: 'chart2',
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Weekly analysis',
      },
      colors: ['#5e3bbe'],
      stroke: {},
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      },
      tooltip: {
        x: {},
      },
    },
  });

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', padding: '20px' }}>
        <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
          2. {values.name} ({values.totalPoints}Pts)
        </Typography>
        <Chart options={data.options} series={data.series} type='area' width={500} height={320} />
      </Paper>
    </Grid>
  );
};

export { Chart2 };
