import { userResponseSchema, useUserQuery } from '@/entities/user';
import UserSettings from '@/widgets/header/ui/UserSettings';
import { Button, Skeleton, Tooltip } from '@mui/material';
import { UserDisplay } from '@/shared/ui';
import * as React from 'react';

const HeaderUserDisplay: React.FC<{ jwt: string }> = ({ jwt }) => {
  const { data, isLoading, isSuccess } = useUserQuery(jwt);
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(null);
  const handleOpenUserMenu: React.MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (isLoading) {
    return (
      <>
        <Skeleton animation='wave' variant='circular' width={40} height={40} />
        <Skeleton width={50} height={25} />
      </>
    );
  }

  if (isSuccess) {
    const validatedData = userResponseSchema.parse(data);
    return (
      <>
        <Tooltip title='Open settings'>
          <Button sx={{ textTransform: 'none' }} color='inherit' onClick={handleOpenUserMenu}>
            <UserDisplay username={validatedData?.username} avatar={validatedData?.avatar} />
          </Button>
        </Tooltip>
        <UserSettings anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
      </>
    );
  }
};

export default HeaderUserDisplay;
