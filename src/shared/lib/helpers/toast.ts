import { toast, ToastOptions } from 'react-toastify';

export function myToast(content: string, options?: ToastOptions) {
  toast(content, {
    position: 'bottom-right',
    theme: 'dark',
    closeOnClick: true,
    pauseOnHover: true,
    type: 'success',
    ...options,
  });
}
