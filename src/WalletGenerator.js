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
        <>
            <div className="flex flex-col items-center justify-center px-4 py-6">

                <p className="text-gray-600 mb-4 text-center mx-2">
                    Click the button below to generate a new Ethereum wallet. All operations are done locally in your browser; we never store or transmit your private information.
                </p>
                <button
                    onClick={createWallet}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto"
                >
                    Create Wallet
                </button>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-6">
                {walletInfo && (
                    <div className="mt-4 p-4 w-full bg-white rounded-lg border shadow-md sm:max-w-md sm:mx-0 mx-2 overflow-auto">
                        <div className="overflow-x-auto">
                            <p className="text-gray-700 text-base"><b>Address:</b> {walletInfo.address}</p>
                            <p className="text-gray-700 text-base mt-2"><b>Mnemonic:</b> {walletInfo.mnemonic}</p>
                            <p className="text-gray-700 text-base mt-2"><b>Private Key:</b> <span className="break-all">{walletInfo.privateKey}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default WalletGenerator;