import { AuthLayout } from '@/widgets/auth-layout';
import { LoginForm } from '@/widgets/login';
import * as React from 'react';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
