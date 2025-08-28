import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/store.tsx';
import '@/shared/lib/firebase.ts';
import './index.css';
import DeviceListenersProvider from './app/providers/deviceListeners/DeviceListenersProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DeviceListenersProvider>
        <App />
      </DeviceListenersProvider>
    </Provider>
  </StrictMode>
);
