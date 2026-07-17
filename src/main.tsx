import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { getBrandForHostname } from './brand.ts';
import './index.css';

const brand = getBrandForHostname(window.location.hostname);
document.documentElement.dataset.brand = brand.id;
document.title = brand.pageTitle;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App brand={brand} />
  </StrictMode>,
);
