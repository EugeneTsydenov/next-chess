'use client';

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as React from 'react';

interface PasswordVisibilityProps {
  label: string;
  name: string;
}

const PasswordVisibility: React.FC<PasswordVisibilityProps> = ({ label, name }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  function handleClickShowPassword() {
    setShowPassword(prev => !prev);
  }
  function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <FormControl
      sx={{
        m: 1,
        width: '100%',
      }}
      variant='outlined'
      required
    >
      <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        required
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        name={name}
      />
    </FormControl>
  );
};

export default PasswordVisibility;
