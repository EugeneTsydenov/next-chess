'use client';

import UserSettings from '@/widgets/header/ui/UserSettings';
import { Button, Skeleton, Tooltip } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { authStore } from '@/shared/model';
import { useWindow } from '@/shared/lib';
import { MeTag } from '@/entities/user';
import { Link } from '@/shared/ui';
import * as React from 'react';

const HeaderDisplay: React.FC = observer(() => {
  const isWindow = useWindow();
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

  if (!authStore.jwt) {
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
          <MeTag avatarVariant='circular' />
        </Button>
      </Tooltip>
      <UserSettings anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
    </>
  );
});

export default HeaderDisplay;
