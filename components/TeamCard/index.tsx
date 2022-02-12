import Image from 'next/image';
import { Grid, Paper, Typography } from '@mui/material';

const TeamCard = ({ image, teamName }: { image: string; teamName: string }) => {
  return (
    <Grid item>
      <Paper
        sx={{ width: 'fit-content' }}
        style={{ cursor: 'pointer', padding: '15px 30px', textAlign: 'center' }}
      >
        <Image src={image} width='200px' height='150px' />
        <Typography variant='h6' marginTop='0.5rem'>
          {teamName}
        </Typography>
      </Paper>
    </Grid>
  );
};

export { TeamCard };
