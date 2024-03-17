'use client';
import { createContext, useState } from 'react';

export const GlobalDataContext = createContext({});

export default function GlobalDataProvider({ children }) {
  const [score, setScore] = useState(10);
  return (
    <GlobalDataContext.Provider value={{ score, setScore }}>
      {children}{' '}
    </GlobalDataContext.Provider>
  );
}
