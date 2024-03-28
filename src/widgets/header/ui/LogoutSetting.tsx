import { MenuItem, Typography } from '@mui/material';
import { LogoutModal } from '@/features/auth';
import * as React from 'react';

const LogoutSetting: React.FC<{ handleCloseUserMenu: () => void }> = ({ handleCloseUserMenu }) => {
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  return (
    <>
      <MenuItem
        onClick={() => {
          handleCloseUserMenu();
          setShowLogoutModal(true);
        }}
        sx={{
          padding: '0px',
        }}
      >
        <Typography
          textAlign='center'
          sx={{
            padding: '6px 16px',
          }}
        >
          Logout
        </Typography>
      </MenuItem>
      <LogoutModal showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal} />
    </>
  );
};

export default LogoutSetting;
