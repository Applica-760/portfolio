// 全てのページで共通する要素の定義，ルーティングの一元化

import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import { router } from './routes';
import '@mantine/core/styles.css';
import '../styles/App.css';

function App() {
  return (
    <MantineProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </MantineProvider>
  );
}

export default App;
