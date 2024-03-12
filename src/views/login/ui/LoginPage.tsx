import { AuthLayout } from '@/widgets/auth-layout';
import { LoginForm } from '@/features/auth';
import * as React from 'react';

interface LoginPageParams {
  callbackUrl?: string;
}

const LoginPage: React.FC<LoginPageParams> = props => {
  return (
    <AuthLayout>
      <LoginForm callbackUrl={props.callbackUrl} />
    </AuthLayout>
  );
};

export default LoginPage;
