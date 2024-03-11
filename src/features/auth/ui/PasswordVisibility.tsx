'use client';

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DeepRequired, FieldErrorsImpl } from 'react-hook-form';
import { RegistrationInputType } from '@/features/auth';
import * as React from 'react';

interface PasswordVisibilityProps {
  label: string;
  name: 'username' | 'email' | 'password' | 'confirmedPassword';
  register: any;
  errors: Partial<FieldErrorsImpl<DeepRequired<RegistrationInputType>>>;
}

const PasswordVisibility: React.FC<PasswordVisibilityProps> = ({
  label,
  name,
  register,
  errors,
}) => {
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
      error={!!errors[name]}
    >
      <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
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
        {...register(name)}
      />
      {errors[name] ? (
        <FormHelperText id='outlined-adornment-password'>{errors[name]?.message}</FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
  );
};

export default PasswordVisibility;
