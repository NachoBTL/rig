import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="plum" grayColor="sand" radius="full">
      <App />
      <ThemePanel />
    </Theme>
  </StrictMode>
);
