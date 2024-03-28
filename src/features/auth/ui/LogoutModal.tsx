import { logoutAction } from '@/features/auth/lib/actions/logoutAction';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { setJwt } from '@/shared/model/jwt/jwtSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import { jwtSelector } from '@/shared/model';
import { authApi } from '@/entities/auth';
import * as React from 'react';

interface LogoutModalProps {
  showLogoutModal: boolean;
  setShowLogoutModal: (state: boolean) => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ showLogoutModal, setShowLogoutModal }) => {
  const jwt = useAppSelector(jwtSelector);
  const dispatch = useAppDispatch();

  async function logout() {
    setShowLogoutModal(false);
    const res = await logoutAction(jwt!);
    if (res === 'OK') {
      dispatch(setJwt(null));
      dispatch(authApi.util?.resetApiState());
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
          height: 200,
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
