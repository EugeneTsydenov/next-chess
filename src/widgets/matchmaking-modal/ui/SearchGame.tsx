import { Button, LinearProgress, Typography } from '@mui/material';
import * as React from 'react';

interface SearchGameProps {
  isSearchGame: boolean;
}

const SearchGame: React.FC<SearchGameProps> = ({ isSearchGame }) => {
  if (!isSearchGame) return;

  return (
    <>
      <Typography component='h3' variant='h3'>
        The enemy is being searched for
      </Typography>
      <LinearProgress sx={{ width: '70%' }} />
      <Button variant='contained' sx={{ width: '70%' }}>
        Cancel search
      </Button>
    </>
  );
};

export default SearchGame;
