import './App.css';
import Footer from './Footer';
import WalletGenerator from './WalletGenerator';
import MetaTags from './MetaTags';

function App() {
  return (
    <div className="App">
      <MetaTags />
      <header className="App-header">
      <h1 className="text-4xl font-bold mb-4">
        Ethereum Wallet Generator
      </h1>
        <WalletGenerator />
        <Footer />
      </header>
      
    </div>
  );
}

export default App;