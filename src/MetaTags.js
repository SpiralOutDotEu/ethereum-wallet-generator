import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => {
  return (
    <Helmet>
      <title>Ethereum Wallet Generator</title>
      <meta name="description" content="Generate Ethereum wallets securely in your browser. No data is stored or transmitted." />
      <meta name="keywords" content="Ethereum, Wallet, Generator, Blockchain, Cryptocurrency" />
      <meta name="author" content="Jumaru" />
      <link rel="canonical" href="https://spiraloutdoteu.github.io/ethereum-wallet-generator/" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://spiraloutdoteu.github.io/ethereum-wallet-generator/" />
      <meta property="og:title" content="Ethereum Wallet Generator" />
      <meta property="og:description" content="Generate Ethereum wallets securely in your browser. No data is stored or transmitted." />
      <meta property="og:image" content="demo.png" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://spiraloutdoteu.github.io/ethereum-wallet-generator/" />
      <meta property="twitter:title" content="Ethereum Wallet Generator" />
      <meta property="twitter:description" content="Generate Ethereum wallets securely in your browser. No data is stored or transmitted." />
      <meta property="twitter:image" content="demo.png" />
    </Helmet>
  );
};

export default MetaTags;
