import dynamic from 'next/dynamic';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const AppraisalMeter = ({ isAdmin }: { isAdmin?: boolean }) => {
  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper style={{ width: 'fit-content', paddingTop: '10px' }}>
        <Typography
          variant={isAdmin ? 'h4' : 'body1'}
          marginBottom={isAdmin ? '1rem' : '0.5rem'}
          textAlign='center'
        >
          Appraisal Meter
        </Typography>
        <GaugeChart
          id='appraisal'
          percent={0.8}
          formatTextValue={(value) => `${+value / 10} %`}
          textColor='#000'
          arcWidth={0.1}
          style={{ width: isAdmin ? '350px' : '200px' }}
          colors={['#FF0000', '#00FF00']}
        />
      </Paper>
    </Grid>
  );
};

export { AppraisalMeter };
