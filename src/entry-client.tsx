import { hydrateRoot } from 'react-dom/client';
import { renderApp } from './main';

hydrateRoot(document.getElementById('root')!, renderApp());