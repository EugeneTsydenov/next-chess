import { LoginPage } from '@/views/login';
import * as React from 'react';

interface LoginProps {
  callbackUrl?: string;
}

const Login: React.FC<LoginProps> = props => {
  return <LoginPage searchParams={props} />;
};

export default Login;
