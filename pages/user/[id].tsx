import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Layout, PrivateUserCard } from '../../components';

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

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

  const [data2, setData2] = useState({
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
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
        categories: [
          '2018-09-19',
          '2018-09-19',
          '2018-09-19',
          '2018-09-19',
          '2018-09-19',
          '2018-09-19',
          '2018-09-19',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  const [data3, setData3] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
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
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
    },
  });

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

  const [data5, setData5] = useState({
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
    <Layout>
      <Grid
        container
        rowSpacing={{ xs: 4, md: 6 }}
        columnSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 4, lg: 8 }}
      >
        <Grid item xs={2} sm={4} md={4} lg={4}>
          <PrivateUserCard />
        </Grid>

        <Grid item xs={2} sm={4} md={4} lg={4}>
          <Typography variant='h4' marginBottom='1rem' marginLeft='4.5rem'>
            Appraisal Meter
          </Typography>
          <GaugeChart
            id='appraisal'
            percent={0.8}
            formatTextValue={(value) => `${+value / 10} %`}
            textColor='#000'
            arcWidth={0.1}
            style={{ width: '400px' }}
            colors={['#FF0000', '#00FF00']}
          />
        </Grid>

        <Grid item xs={2} sm={4} md={4} lg={4}>
          <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
            1. Productivity Monitoring (30Pts)
          </Typography>
          <Chart options={data.options} series={data.series} type='bar' width={500} height={320} />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
            2. Workspace Uptime/Computer Sleep Cycles/Total Screentime
          </Typography>
          <Chart options={data2.options} series={data2.series} type='area' width={500} />
        </Grid>
        <Grid item xs={2} sm={4} md={4} lg={4}>
          <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
            3. 3rd Party websites used
          </Typography>
          <Chart
            options={data3.options}
            series={data3.series}
            type='bar'
            width={500}
            height={320}
          />
        </Grid>

        <Grid item xs={2} sm={4} md={4} lg={4}>
          <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
            4. Email and Media Monitoring
          </Typography>
          <Chart
            options={data4.options}
            series={data4.series}
            type='line'
            width={500}
            height={320}
          />
        </Grid>

        <Grid item xs={2} sm={4} md={4} lg={4}>
          <Typography variant='h5' fontWeight='500' marginBottom='1rem'>
            5. 3rd Party Application Usage Time Monitoring
          </Typography>
          <Chart
            options={data5.options}
            series={data5.series}
            type='radialBar'
            height={320}
            width={320}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default User;
