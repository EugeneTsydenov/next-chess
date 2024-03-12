import { AuthLayout } from '@/widgets/auth-layout';
import { RegistrationForm } from '@/features/auth';
import * as React from 'react';

const RegistrationPage: React.FC = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};

export default RegistrationPage;
