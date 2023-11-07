const Footer = () => {
    return (
        <footer className="bg-opacity-20 bg-white border-t border-gray-700 mt-8 py-4">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="text-sm text-gray-300 mb-4">
                    <span>© {new Date().getFullYear()} Ethereum Wallet Generator</span>
                </div>
                <a href="https://github.com/SpiralOutDotEu/ethereum-wallet-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-600 rounded shadow text-sm">
                    Give a Star on GitHub
                </a>
                <div>
                <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ejumaru_igano&screen_name=jumaru_igano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-600 rounded shadow text-sm">
                    Follow on Twitter
                </a>
                </div>
                <div>
                <a href="https://twitter.com/share?url=https://ethereum-wallet-generator-online.vercel.app/&text=Generate Ethereum wallets securely in your browser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-600 rounded shadow text-sm">
                    Share on Twitter
                </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;