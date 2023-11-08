import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Ethereum Wallet Generator</title>
      <meta name="description" content="Ethereum Wallet Generator" />
      <meta name="title" key="title" content="Ethereum Wallet Generator" />
      <meta property="og:title" key="og:title" content="Ethereum Wallet Generator" />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content="Generate Ethereum wallets securely in your browser. No data is stored or transmitted."
      />
      <meta
        property="og:image"
        key="og:image"
        content="https://ethereum-wallet-generator-online.vercel.app/demo.png"
      />
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
