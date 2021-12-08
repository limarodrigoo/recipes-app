import React from 'react';
import FormsLogin from '../components/FormsLogin';
import LoginProvider from '../context/LoginProvider';

export default function Login() {
  return (
    <LoginProvider>
      <FormsLogin />
    </LoginProvider>
  );
}
