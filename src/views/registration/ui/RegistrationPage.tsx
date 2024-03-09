import { RegistrationForm } from '@/widgets/registration';
import { AuthLayout } from '@/widgets/auth-layout';
import * as React from 'react';

const RegistrationPage: React.FC = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};

export default RegistrationPage;
