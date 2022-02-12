import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid, Paper, Typography } from '@mui/material';

interface PropTypes {
  image: string;
  teamName: string;
  value: string;
}

const TeamCard: FC<PropTypes> = (props) => {
  return (
    <Grid item>
      <Link href={`/team/${props.value}`} passHref replace={true}>
        <Paper
          sx={{ width: 'fit-content' }}
          style={{ cursor: 'pointer', padding: '15px 30px', textAlign: 'center' }}
        >
          <Image src={props.image} width='200px' height='150px' />
          <Typography variant='h6' marginTop='0.5rem'>
            {props.teamName}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
};

export { TeamCard };
