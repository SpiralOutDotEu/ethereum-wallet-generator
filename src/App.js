import './App.css';
import WalletGenerator from './WalletGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-4xl font-bold mb-4">
        Ethereum Wallet Generator
      </h1>
        <WalletGenerator />
      </header>
    </div>
  );
}

export default App;