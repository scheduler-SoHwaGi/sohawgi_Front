import React from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../utils/axios';

export const AuthContext = createContext(null);

interface MyComponentProps {
  children: ReactNode;
}

const isDevLogin = async() => {
  try{
    const response = await api.post('/oauth/qa');

    localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken).replace(/"/g, ''))
    localStorage.setItem('refreshToken', JSON.stringify(response.data.refreshToken).replace(/"/g, ''))
  }
  catch(error){
    console.log(error);
  }
}

/**
 * Provides authentication context to child components.
 *
 * Initializes authentication state, handles user info received from a native WebView or development login, and supplies authentication data to descendants via {@link AuthContext}.
 *
 * @param children - React components that will have access to the authentication context.
 *
 * @remark
 * In development mode, performs a mock login and stores tokens in localStorage. In production, listens for user info from a native WebView and stores authentication details in localStorage.
 */
export function AuthProvider({ children }: MyComponentProps) {
  const [authInfo, setAuthInfo] = useState(null);
  const isDev = import.meta.env.DEV;

  useEffect(() => {
    if ( !isDev &&
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.webViewReady
    ) {
      window.webkit.messageHandlers.webViewReady.postMessage('WebViewReady');
    }

    window.receiveUserInfo = function (info) {
      localStorage.setItem('userID', JSON.stringify(info.userID));
      localStorage.setItem(
        'accessToken',
        JSON.stringify(info.accessToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(info.refreshToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'authorizationCode',
        JSON.stringify(info.authorizationCode),
      );

      setAuthInfo(info);
    };

    if (isDev) {
      isDevLogin();
    }
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
