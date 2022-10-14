import type React from 'react';
import '../../styles/index.css';
import '../global.css';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
