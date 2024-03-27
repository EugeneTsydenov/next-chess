import { IDropDawnLink, INavBarLink } from '@/widgets/header/model/types/INavLinks';
import { v4 as uuidv4 } from 'uuid';

function playDropDawnLinks(parentPath: string): IDropDawnLink[] {
  return [
    { id: uuidv4(), dropDownLinkName: 'Online', dropDownPath: `${parentPath}/online` },
    { id: uuidv4(), dropDownLinkName: 'Offline', dropDownPath: `${parentPath}/offline` },
    { id: uuidv4(), dropDownLinkName: 'Against bot', dropDownPath: `${parentPath}/bot` },
    { id: uuidv4(), dropDownLinkName: 'Against friend', dropDownPath: `${parentPath}/friend` },
  ];
}

function tasksDropDawnLinks(parentPath: string): IDropDawnLink[] {
  return [
    { id: uuidv4(), dropDownLinkName: 'Create a task', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Puzzle Streak', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Puzzle Storm', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Puzzle Racer', dropDownPath: `${parentPath}/#` },
  ];
}

function educationDropDawnLinks(parentPath: string): IDropDawnLink[] {
  return [
    { id: uuidv4(), dropDownLinkName: 'Chess basics', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Practice', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Coordinates', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Studio', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Trainers', dropDownPath: `${parentPath}/#` },
  ];
}

function viewingDropDawnLinks(parentPath: string): IDropDawnLink[] {
  return [
    { id: uuidv4(), dropDownLinkName: 'ChessHub TV', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Current games', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Translations', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Video library', dropDownPath: `${parentPath}/#` },
  ];
}

function communityDropDawnLinks(parentPath: string): IDropDawnLink[] {
  return [
    { id: uuidv4(), dropDownLinkName: 'Players', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Clubs', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Forum', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Blog', dropDownPath: `${parentPath}/#` },
  ];
}

function instrumentsDropDawnLinks(parentPath: string): IDropDawnLink[] {
  return [
    { id: uuidv4(), dropDownLinkName: 'Analyze the game', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Debuts', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Board editor', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Import batch', dropDownPath: `${parentPath}/#` },
    { id: uuidv4(), dropDownLinkName: 'Advanced search', dropDownPath: `${parentPath}/#` },
  ];
}

export const navLinks: INavBarLink[] = [
  {
    id: uuidv4(),
    navLinkName: 'Play',
    navPath: '/play',
    dropDownLinks: playDropDawnLinks('/play'),
  },
  {
    id: uuidv4(),
    navLinkName: 'Tasks',
    navPath: '/tasks',
    dropDownLinks: tasksDropDawnLinks('/tasks'),
  },
  {
    id: uuidv4(),
    navLinkName: 'Education',
    navPath: '/education',
    dropDownLinks: educationDropDawnLinks('/education'),
  },
  {
    id: uuidv4(),
    navLinkName: 'Viewing',
    navPath: '/viewing',
    dropDownLinks: viewingDropDawnLinks('/viewing'),
  },
  {
    id: uuidv4(),
    navLinkName: 'Community',
    navPath: '/community',
    dropDownLinks: communityDropDawnLinks('/community'),
  },
  {
    id: uuidv4(),
    navLinkName: 'Instruments',
    navPath: '/instruments',
    dropDownLinks: instrumentsDropDawnLinks('/instruments'),
  },
];
