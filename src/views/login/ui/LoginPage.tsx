import { AuthLayout } from '@/widgets/auth-layout';
import { LoginForm } from '@/features/auth';
import * as React from 'react';

interface LoginPageParams {
  searchParams: {
    callbackUrl?: string;
  };
}

const LoginPage: React.FC<LoginPageParams> = props => {
  return (
    <AuthLayout>
      <LoginForm searchProps={props.searchParams} />
    </AuthLayout>
  );
};

export default LoginPage;
