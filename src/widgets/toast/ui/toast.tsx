import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Portal } from '@/shared/ui/portal';
import './toast.scss';

export const CustomToast = () => (
  <Portal id='toast-portal'>
    <div className='custom-toast'>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  </Portal>
);
