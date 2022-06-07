import React, { useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
export default function Demo() {
  const [token, setToken] = useState('');
  return (
    <div>
      <GoogleReCaptcha
        onVerify={(token) => {
          setToken(token);
        }}
      />
    </div>
  );
}
