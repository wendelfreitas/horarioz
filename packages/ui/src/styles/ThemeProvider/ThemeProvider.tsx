import type React from 'react';
import '../../styles/index.css';
import '../../../.storybook/global.css';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
