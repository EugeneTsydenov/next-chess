import { AuthForm, PasswordVisibility } from '@/features/auth';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { AuthTitle, Link } from '@/shared/ui';
import Box from '@mui/material/Box';
import * as React from 'react';

const RegistrationFrom: React.FC = () => {
  return (
    <AuthForm>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '65%',
          alignItems: 'center',
          height: '100%',
          gap: 2,
        }}
      >
        <AuthTitle />
        <Typography variant='h3' component='h2' fontWeight={600} mb={4}>
          Register to open new opportunities
        </Typography>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          required
          name='email'
          sx={{ width: '100%' }}
        />
        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          required
          name='username'
          sx={{ width: '100%' }}
        />
        <PasswordVisibility label='Password' name='password' />
        <PasswordVisibility label='Confirm the password' name='confirm_password' />
        <Button type='submit' variant='contained' fullWidth>
          Register
        </Button>
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          width='100%'
        >
          <Link href='#'>
            <Typography>Already have an account? Sign In</Typography>
          </Link>
        </Box>
      </Box>
    </AuthForm>
  );
};

export default RegistrationFrom;
