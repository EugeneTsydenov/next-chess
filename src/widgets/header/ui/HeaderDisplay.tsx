'use client';

import { useAppSelector, useWindow } from '@/shared/lib';
import { Button, Skeleton } from '@mui/material';
import { UserDisplay } from '@/entities/user';
import { jwtSelector } from '@/shared/model';
import { Link } from '@/shared/ui';
import * as React from 'react';

const HeaderDisplay: React.FC = () => {
  const isWindow = useWindow();
  const jwt = useAppSelector(jwtSelector);

  if (!isWindow) {
    return <Skeleton width={50} height={30} />;
  }

  if (!jwt) {
    return (
      <Link href='/login'>
        <Button variant='contained'>Login</Button>
      </Link>
    );
  }

  return <UserDisplay jwt={jwt} />;
};

export default HeaderDisplay;
