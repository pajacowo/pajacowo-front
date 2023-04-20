import { useContext } from 'react';
import { ToastContext } from '../toast/ToastContext';

export const useToast = () => useContext(ToastContext);