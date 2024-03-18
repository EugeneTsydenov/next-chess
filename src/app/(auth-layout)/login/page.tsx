import { LoginPage } from '@/views/login';
import * as React from 'react';
interface LoginProps {
  searchParams: {
    callbackUrl?: string;
  };
}

const Login: React.FC<LoginProps> = ({ searchParams }) => {
  return <LoginPage callbackUrl={searchParams.callbackUrl} />;
};

export default Login;
