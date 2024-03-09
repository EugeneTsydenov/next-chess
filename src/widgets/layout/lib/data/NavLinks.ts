import { IDropDawnLink, INavBarLink } from '@/widgets/layout/model/types/INavLinks';
import { v4 as uuidv4 } from 'uuid';

const playDropDawnLinks: IDropDawnLink[] = (function () {
  return [
    { id: uuidv4(), dropDownLinkName: 'Online', dropDownPath: '/online' },
    { id: uuidv4(), dropDownLinkName: 'Offline', dropDownPath: '/offline' },
    { id: uuidv4(), dropDownLinkName: 'Against bot', dropDownPath: '/bot' },
    { id: uuidv4(), dropDownLinkName: 'Against friend', dropDownPath: '/friend' },
  ];
})();

const tasksDropDawnLinks: IDropDawnLink[] = (function () {
  return [
    { id: uuidv4(), dropDownLinkName: 'Create a task', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Puzzle Streak', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Puzzle Storm', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Puzzle Racer', dropDownPath: '/#' },
  ];
})();

const educationDropDawnLinks: IDropDawnLink[] = (function () {
  return [
    { id: uuidv4(), dropDownLinkName: 'Chess basics', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Practice', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Coordinates', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Studio', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Trainers', dropDownPath: '/#' },
  ];
})();

const viewingDropDawnLinks: IDropDawnLink[] = (function () {
  return [
    { id: uuidv4(), dropDownLinkName: 'ChessHub TV', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Current games', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Translations', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Video library', dropDownPath: '/#' },
  ];
})();

const communityDropDawnLinks: IDropDawnLink[] = (function () {
  return [
    { id: uuidv4(), dropDownLinkName: 'Players', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Clubs', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Forum', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Blog', dropDownPath: '/#' },
  ];
})();

const instrumentsDropDawnLinks: IDropDawnLink[] = (function () {
  return [
    { id: uuidv4(), dropDownLinkName: 'Analyze the game', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Debuts', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Board editor', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Import batch', dropDownPath: '/#' },
    { id: uuidv4(), dropDownLinkName: 'Advanced search', dropDownPath: '/#' },
  ];
})();

export const navLinks: INavBarLink[] = [
  { id: uuidv4(), navLinkName: 'Play', navPath: '/play', dropDownLinks: playDropDawnLinks },
  { id: uuidv4(), navLinkName: 'Tasks', navPath: '/tasks', dropDownLinks: tasksDropDawnLinks },
  {
    id: uuidv4(),
    navLinkName: 'Education',
    navPath: '/education',
    dropDownLinks: educationDropDawnLinks,
  },
  {
    id: uuidv4(),
    navLinkName: 'Viewing',
    navPath: '/viewing',
    dropDownLinks: viewingDropDawnLinks,
  },
  {
    id: uuidv4(),
    navLinkName: 'Community',
    navPath: '/community',
    dropDownLinks: communityDropDawnLinks,
  },
  {
    id: uuidv4(),
    navLinkName: 'Instruments',
    navPath: '/instruments',
    dropDownLinks: instrumentsDropDawnLinks,
  },
];
