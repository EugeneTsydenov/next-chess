'use client';

import {
  confirmedGameSelector,
  searchGameSelector,
  startGameSelector,
  waitingEnemySelector,
} from '@/entities/game';
import WaitingEnemy from '@/widgets/matchmaking-modal/ui/WaitingEnemy';
import ConfirmGame from '@/widgets/matchmaking-modal/ui/ConfirmGame';
import SearchGame from '@/widgets/matchmaking-modal/ui/SearchGame';
import { useAppSelector } from '@/shared/lib';
import { Box, Modal } from '@mui/material';
import * as React from 'react';

const MatchmakingModal: React.FC = () => {
  const isSearchGame = useAppSelector(searchGameSelector);
  const isConfirmedGame = useAppSelector(confirmedGameSelector);
  const isWaitingEnemy = useAppSelector(waitingEnemySelector);
  const isStartGame = useAppSelector(startGameSelector);

  const isOpen = isSearchGame || isConfirmedGame || isWaitingEnemy || isStartGame;

  return (
    <Modal
      aria-labelledby='keep-mounted-modal-title'
      aria-describedby='keep-mounted-modal-description'
      open={isOpen}
      keepMounted
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
          py: 3,
        }}
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={5}
      >
        <SearchGame isSearchGame={isSearchGame} />
        <ConfirmGame isConfirmedGame={isConfirmedGame} />
        <WaitingEnemy isWaitingEnemy={isWaitingEnemy} />
      </Box>
    </Modal>
  );
};

export default MatchmakingModal;
