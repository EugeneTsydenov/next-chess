import { AuthLayout } from '@/widgets/auth-layout';
import { LoginForm } from '@/features/auth';
import * as React from 'react';

interface LoginPageParams {
  callbackUrl?: string;
}

const LoginPage: React.FC<LoginPageParams> = ({ callbackUrl }) => {
  return (
    <AuthLayout>
      <LoginForm callbackUrl={callbackUrl} />
    </AuthLayout>
  );
};

export default LoginPage;
