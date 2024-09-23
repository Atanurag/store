import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';
import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById('container')).render( 
<BrowserRouter> <Demo /></BrowserRouter>
);
  