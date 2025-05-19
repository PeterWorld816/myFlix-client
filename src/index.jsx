import 'bootstrap/dist/css/bootstrap.min.css';   // <-- NEW
import React from 'react';
import { createRoot } from 'react-dom/client';
import MainView from './components/main-view/main-view.jsx';

createRoot(document.getElementById('app')).render(<MainView />);
