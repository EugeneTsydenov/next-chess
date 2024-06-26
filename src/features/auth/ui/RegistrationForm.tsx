'use client';

import {
  RegistrationFormSchema,
  RegistrationInputType,
} from '@/features/auth/model/schemas/registrationFormSchema';
import { registrationAction } from '@/features/auth/lib/actions/registrationAction';
import PasswordVisibility from '@/features/auth/ui/PasswordVisibility';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { myToast } from '@/shared/lib';
import { Link } from '@/shared/ui';
import * as React from 'react';

const RegistrationFrom: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationInputType>({
    resolver: zodResolver(RegistrationFormSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<RegistrationInputType> = async data => {
    const { email, username, password } = data;
    const res = await registrationAction({ email, username, password });
    if (res.statusText === 'OK') {
      myToast(res.message);
      router.push('/login');
    } else {
      myToast(res.message, { type: 'error' });
    }
  };

  return (
    <>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          error={!!errors.email}
          id='outlined-basic'
          label='Email'
          variant='outlined'
          {...register('email')}
          sx={{ width: '100%' }}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          error={!!errors.username}
          id='outlined-basic'
          label='Username'
          variant='outlined'
          {...register('username')}
          sx={{ width: '100%' }}
          helperText={errors.username ? errors.username.message : ''}
        />
        <PasswordVisibility label='Password' name='password' register={register} errors={errors} />
        <PasswordVisibility
          label='Confirm the password'
          name='confirmedPassword'
          register={register}
          errors={errors}
        />
        <Button type='submit' variant='contained' fullWidth disabled={isSubmitting}>
          {isSubmitting ? 'Register...' : 'Register'}
        </Button>
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        width='100%'
      >
        <Link href='#'>
          <Typography>I agree to the terms</Typography>
        </Link>
        <Link href='/login'>
          <Typography>Have an account? Sign In</Typography>
        </Link>
      </Box>
    </>
  );
};

export default RegistrationFrom;
