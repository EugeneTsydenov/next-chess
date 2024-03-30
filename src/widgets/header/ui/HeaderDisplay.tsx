'use client';

import UserSettings from '@/widgets/header/ui/UserSettings';
import { Button, Skeleton, Tooltip } from '@mui/material';
import { useAppSelector, useWindow } from '@/shared/lib';
import { jwtSelector } from '@/shared/model';
import { UserTag } from '@/entities/user';
import { Link } from '@/shared/ui';
import * as React from 'react';

const HeaderDisplay: React.FC = () => {
  const isWindow = useWindow();
  const jwt = useAppSelector(jwtSelector);
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(null);
  const handleOpenUserMenu: React.MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

  return (
    <>
      <Tooltip title='Open settings'>
        <Button sx={{ textTransform: 'none' }} color='inherit' onClick={handleOpenUserMenu}>
          <UserTag jwt={jwt} />
        </Button>
      </Tooltip>
      <UserSettings anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
    </>
  );
};

export default HeaderDisplay;
