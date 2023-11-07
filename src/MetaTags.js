import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => {
  return (
    <Helmet>
      <title>Ethereum Wallet Generator</title>
      <meta name="description" content="Generate Ethereum wallets securely in your browser. No data is stored or transmitted." />
      <meta name="keywords" content="Ethereum, Wallet, Generator, Blockchain, Cryptocurrency" />
      <meta name="author" content="Jumaru" />
      <link rel="canonical" href="https://ethereum-wallet-generator-online.vercel.app/" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ethereum-wallet-generator-online.vercel.app/" />
      <meta property="og:title" content="Ethereum Wallet Generator Online" />
      <meta property="og:description" content="Generate Ethereum wallets securely in your browser. No data is stored or transmitted." />
      <meta property="og:image" content="%PUBLIC_URL%/demo.png" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ethereum-wallet-generator-online.vercel.app/" />
      <meta property="twitter:title" content="Ethereum Wallet Generator Online" />
      <meta property="twitter:description" content="Generate Ethereum wallets securely in your browser. No data is stored or transmitted." />
      <meta property="twitter:image" content="%PUBLIC_URL%/demo.png" />
    </Helmet>
  );
};

export default MetaTags;
