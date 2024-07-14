import bullet from '../../../../../public/bullet.png';
import blitz from '../../../../../public/blitz.png';
import { StaticImageData } from 'next/image';

export interface ITimeMode {
  modeTitle: 'Bullet' | 'Blitz' | 'Rapid';
  times: ITime[];
  modeIcon: StaticImageData | string;
}

interface ITime {
  timeTitle: string;
  seconds: number;
}

const bulletTimes: ITime[] = [
  { timeTitle: '1 | 0', seconds: 60 },
  { timeTitle: '1 | 1', seconds: 60 },
  { timeTitle: '2 | 1', seconds: 120 },
];

const blitzTimes: ITime[] = [
  { timeTitle: '3 | 0', seconds: 180 },
  { timeTitle: '3 | 2', seconds: 180 },
  { timeTitle: '5 | 0', seconds: 300 },
];

const rapidTimes: ITime[] = [
  { timeTitle: '10 | 0', seconds: 600 },
  { timeTitle: '15 | 10', seconds: 900 },
  { timeTitle: '30 | 0', seconds: 1800 },
];

export const timeModes: ITimeMode[] = [
  { modeTitle: 'Bullet', times: bulletTimes, modeIcon: bullet },
  { modeTitle: 'Blitz', times: blitzTimes, modeIcon: blitz },
  { modeTitle: 'Rapid', times: rapidTimes, modeIcon: 'MuiClock' },
];
