import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);

// TechBridge click-to-edit picker — staging branch builds only. Inert until
// the TechBridge dashboard frames the page and turns it on. Vercel exposes the
// branch to CRA as REACT_APP_VERCEL_GIT_COMMIT_REF ("Automatically expose
// System Environment Variables"); it is inlined at build time, so live builds
// drop this block entirely.
if (process.env.REACT_APP_VERCEL_GIT_COMMIT_REF === 'staging') {
    const picker = document.createElement('script');
    picker.src = 'https://app.techbridge.dev/site-picker.js';
    picker.async = true;
    picker.dataset.dashboardOrigin = 'https://app.techbridge.dev';
    document.body.appendChild(picker);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
