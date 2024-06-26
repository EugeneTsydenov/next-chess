'use client';

import HeaderUserDisplay from '@/widgets/header/ui/HeaderUserDisplay';
import { useAppSelector, useWindow } from '@/shared/lib';
import { Button, Skeleton } from '@mui/material';
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

  return <HeaderUserDisplay jwt={jwt} />;
};

export default HeaderDisplay;
