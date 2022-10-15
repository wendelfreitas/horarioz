import type React from 'react';
import '../../styles/index.css';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
