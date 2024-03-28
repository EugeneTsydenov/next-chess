import LogoutSetting from '@/widgets/header/ui/LogoutSetting';
import { Menu, MenuItem, Typography } from '@mui/material';
import * as React from 'react';

interface UserListProps {
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: () => void;
}

const UserSettings: React.FC<UserListProps> = ({ anchorElUser, handleCloseUserMenu }) => {
  return (
    <Menu
      sx={{ mt: '45px' }}
      id='menu-appbar'
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        x,
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={!!anchorElUser}
      onClose={handleCloseUserMenu}
    >
      <LogoutSetting handleCloseUserMenu={handleCloseUserMenu} />
    </Menu>
  );
};

export default UserSettings;
