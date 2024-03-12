import { AuthLayout } from '@/widgets/auth-layout';
import { LoginForm } from '@/features/auth';
import * as React from 'react';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
