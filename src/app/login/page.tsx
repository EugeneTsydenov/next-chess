import { LoginPage } from '@/views/login';
import * as React from 'react';

interface LoginProps {
  callbackUrl?: string;
  searchParams: Record<string, string>;
}

const Login: React.FC<LoginProps> = props => {
  console.log(props);
  return <LoginPage searchParams={props} />;
};

export default Login;
