import { LoginForm } from '@/features/auth';
import * as React from 'react';

interface LoginPageParams {
  callbackUrl?: string;
}

const LoginPage: React.FC<LoginPageParams> = ({ callbackUrl }) => {
  return <LoginForm callbackUrl={callbackUrl} />;
};

export default LoginPage;
