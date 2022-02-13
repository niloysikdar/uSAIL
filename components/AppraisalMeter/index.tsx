import dynamic from 'next/dynamic';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const AppraisalMeter = () => {
  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', paddingTop: '10px' }}>
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
      </Paper>
    </Grid>
  );
};

export { AppraisalMeter };
