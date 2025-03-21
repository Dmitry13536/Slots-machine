import './App.css';
import { GameProvider } from './Context';
import Roulet from './components/Roulet';
import Count from './components/Count';
import Alert from './components/Alert';


function App() {
  return (
    <GameProvider>
      <Alert />
    <div className="App">
        <Roulet />
        <Count />
    </div>
    </GameProvider>
  );
}

export default App;
