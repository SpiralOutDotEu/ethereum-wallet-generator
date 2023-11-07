import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletGenerator = () => {
  const [walletInfo, setWalletInfo] = useState(null);

  const createWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setWalletInfo({
      address: wallet.address,
      mnemonic: wallet.mnemonic.phrase,
      privateKey: wallet.privateKey
    });
  };

  return (
    <div>
      <button onClick={createWallet}>Create Wallet</button>
      {walletInfo && (
        <div>
          <p>Address: {walletInfo.address}</p>
          <p>Mnemonic: {walletInfo.mnemonic}</p>
          <p>Private Key: {walletInfo.privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default WalletGenerator;
