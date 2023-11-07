import React, { useState } from 'react';
import { ethers } from 'ethers';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/solid';


const WalletGenerator = () => {
    const [walletInfo, setWalletInfo] = useState(null);
    const [copied, setCopied] = useState({ address: false, mnemonic: false, privateKey: false });

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

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopied({ ...copied, [field]: true });
        setTimeout(() => {
            setCopied({ ...copied, [field]: false });
        }, 2000); // Reset the copied state after 2 seconds
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
            <div className="mt-4 p-6 sm:p-6 w-full bg-opacity-20 bg-white border-t border-gray-700 mt-8 py-4 rounded-lg border shadow-md sm:max-w-md sm:mx-auto mx-2 overflow-auto">
                {walletInfo ? (
                    <div className="overflow-x-auto text-sm mb-4">
                        {/* Address */}
                        <div className="flex items-center justify-between space-x-2">
                            <p className="text-white text-base"><b>Address:</b></p>
                            <div className="flex-1">
                                <p className="text-white text-base break-all">{walletInfo.address}</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(walletInfo.address, 'address')}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded inline-flex items-center"
                            >
                                {copied.address ? <CheckIcon className="h-5 w-5" /> : <ClipboardIcon className="h-5 w-5" />}
                            </button>
                        </div>
                        {copied.address && <p className="text-green-500 text-xs">Address copied!</p>}

                        {/* Mnemonic */}
                        <div className="flex items-center justify-between space-x-2 mt-4">
                            <p className="text-white text-base"><b>Mnemonic:</b></p>
                            <div className="flex-1">
                                <p className="text-white text-base break-all">{walletInfo.mnemonic}</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(walletInfo.mnemonic, 'mnemonic')}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded inline-flex items-center"
                            >
                                {copied.mnemonic ? <CheckIcon className="h-5 w-5" /> : <ClipboardIcon className="h-5 w-5" />}
                            </button>
                        </div>
                        {copied.mnemonic && <p className="text-green-500 text-xs">Mnemonic copied!</p>}

                        {/* Private Key */}
                        <div className="flex items-center justify-between space-x-2 mt-4">
                            <p className="text-white text-base"><b>Private Key:</b></p>
                            <div className="flex-1">
                                <p className="text-white text-base break-all">{walletInfo.privateKey}</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(walletInfo.privateKey, 'privateKey')}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded inline-flex items-center"
                            >
                                {copied.privateKey ? <CheckIcon className="h-5 w-5" /> : <ClipboardIcon className="h-5 w-5" />}
                            </button>
                        </div>
                        {copied.privateKey && <p className="text-green-500 text-xs">Private key copied!</p>}

                        {/* Download Button */}
                        <button
                            onClick={downloadWalletInfo}
                            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Download Wallet Info
                        </button>
                    </div>
                ) : (
                    <p className="text-white text-center">No wallet information available.</p>
                )}
            </div>
        </>
    );
};

export default WalletGenerator;