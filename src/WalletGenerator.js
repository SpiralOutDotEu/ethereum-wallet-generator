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

    const downloadWalletInfo = () => {
        if (!walletInfo) return;

        const blob = new Blob(
            [
                `Address: ${walletInfo.address}\n`,
                `Mnemonic: ${walletInfo.mnemonic}\n`,
                `Private Key: ${walletInfo.privateKey}`
            ],
            { type: 'text/plain;charset=utf-8' }
        );

        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `wallet-info-${walletInfo.address}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-6">

                <p className="text-gray-300 mb-4 text-center mx-2 max-w-4xl mx-auto p-4">
                    Click the button below to generate a new Ethereum wallet. All operations are done locally in your browser; we never store or transmit your private information.
                </p>
                <button
                    onClick={createWallet}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto"
                >
                    Create Random Wallet
                </button>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-6">
                {walletInfo && (
                    <div className="mt-4 sm:p-8 w-full bg-opacity-20 bg-white border-t border-gray-700 sm:mt-8 py-4 rounded-lg border shadow-md sm:max-w-md mx-auto overflow-auto">
                        <div className="overflow-x-auto text-sm mb-4">
                            <p className="text-white-100 text-base"><b>Address:</b> {walletInfo.address}</p>
                            <p className="text-white-100 text-base mt-2"><b>Mnemonic:</b> {walletInfo.mnemonic}</p>
                            <p className="text-white-100 text-base mt-2"><b>Private Key:</b> <span className="break-all">{walletInfo.privateKey}</span></p>
                        </div>
                        <button
                            onClick={downloadWalletInfo}
                            className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                        >
                            Download Wallet Info
                        </button>
                    </div>

                )}
            </div>
        </>
    );
};

export default WalletGenerator;