const Footer = () => {
    return (
      <footer className="bg-opacity-20 bg-white border-t border-gray-700 mt-8 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-sm text-gray-300 mb-4">
            <span>© {new Date().getFullYear()} Ethereum Wallet Generator</span>
            <span>|</span>
            <a href="https://github.com/SpiralOutDotEu/ethereum-wallet-generator" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:underline hover:text-white">
              Open Source
            </a>
          </div>
          <a href="https://github.com/SpiralOutDotEu/ethereum-wallet-generator" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-600 rounded shadow text-sm">
            Give a Star on GitHub
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;