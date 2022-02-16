import dynamic from 'next/dynamic';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CategoryDataType } from '../../types';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart3 = ({ values }: { values: CategoryDataType }) => {
  const [data3, setData3] = useState({
    series: [
      {
        data: values.weeklyData,
      },
    ],
    options: {
      chart: {
        id: 'chart3',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Weekly analysis',
      },
      colors: ['#5e3bbe'],
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      },
    },
  });

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', padding: '20px' }}>
        <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
          3. {values.name} ({values.score}/{values.totalPoints})
        </Typography>
        <Chart options={data3.options} series={data3.series} type='bar' width={500} height={320} />
      </Paper>
    </Grid>
  );
};

export { Chart3 };
