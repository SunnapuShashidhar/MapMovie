import React, { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthContextType {
  signIn: () => void;
  signOut: () => void;
  isSignedIn: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    checkUserAlreadyLogin()
  }, [])
  const checkUserAlreadyLogin = async () => {
    const token = await AsyncStorage.getItem('userToken')
    if (token === "shashidhar") {
      setIsSignedIn(true)
    }
  }
  const signIn = async () => {
    await AsyncStorage.setItem('userToken', 'shashidhar');
    setIsSignedIn(true);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
