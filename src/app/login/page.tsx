import { LoginPage } from '@/views/login';
import * as React from 'react';

interface LoginProps {
  callbackUrl?: string;
  searchParams: Record<string, string>;
}

const Login: React.FC<LoginProps> = props => {
  return <LoginPage callbackUrl={props.callbackUrl} />;
};

export default Login;
