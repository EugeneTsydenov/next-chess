import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@/app/_model';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
