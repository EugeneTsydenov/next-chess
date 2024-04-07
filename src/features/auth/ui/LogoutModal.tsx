import { logoutAction } from '@/features/auth/lib/actions/logoutAction';
import { Box, Button, Modal, Typography } from '@mui/material';
import sadSmile from '../../../../public/sad-smile.png';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import { authStore } from '@/shared/model';
import Image from 'next/image';
import * as React from 'react';

interface LogoutModalProps {
  showLogoutModal: boolean;
  setShowLogoutModal: (state: boolean) => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ showLogoutModal, setShowLogoutModal }) => {
  async function logout() {
    setShowLogoutModal(false);
    const res = await logoutAction(authStore.jwt!);
    if (res === 'OK') {
      authStore.setJwt(null);
    }
  }

  return (
    <Modal
      keepMounted
      open={showLogoutModal}
      aria-labelledby='keep-mounted-modal-title'
      aria-describedby='keep-mounted-modal-description'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 550,
          boxShadow: 24,
          borderRadius: '10px',
          p: 3,
        }}
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={7}
      >
        <Typography variant='h3' component='h3'>
          Are you sure you want to logout?
        </Typography>
        <Image src={sadSmile} alt='sad smile' width={80} />
        <Box display='flex' alignItems='center' gap={5} width='100%' justifyContent='center'>
          <Button
            variant='contained'
            sx={{ width: '100px', display: 'flex', alignItems: 'center', gap: 1 }}
            onClick={async () => {
              await logout();
            }}
          >
            <Typography>Yes</Typography>
            <LogoutIcon />
          </Button>
          <Button
            variant='contained'
            sx={{ width: '100px', display: 'flex', alignItems: 'center', gap: 1 }}
            color='error'
            onClick={() => {
              setShowLogoutModal(false);
            }}
          >
            <Typography>No</Typography>
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LogoutModal;
