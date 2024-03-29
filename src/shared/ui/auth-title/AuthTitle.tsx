import Typography from '@mui/material/Typography';
import * as React from 'react';

const AuthTitle: React.FC = () => {
  return (
    <Typography
      variant='h2'
      component='h1'
      mt={10}
      fontWeight={700}
      display='flex'
      alignItems='center'
      mb={7}
    >
      <Typography
        color='primary'
        fontFamily='inherit'
        fontSize='inherit'
        fontWeight='inherit'
        display='block'
        px={1}
      >
        ChessHub
      </Typography>
      THE BEST chess site
    </Typography>
  );
};

export default AuthTitle;
