import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { AuthProvider } from "../src/context/AuthContext";


const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Provider store={store}><App /></Provider>);
root.render(

    <AuthProvider>
        <App />
    </AuthProvider>

);
