'use client';

import { Provider } from 'react-redux';
import { $axios } from '@/shared/api';
import { store } from '@/app/_model';
import * as React from 'react';
const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
