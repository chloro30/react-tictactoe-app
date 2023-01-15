import './App.css';
import Boards from './components/Boards';

function App() {
  return (
    <div className="game">
      <div className='game-board'>
        <Boards />
      </div>
      <div className='game-info'>
        game-info
      </div>
    </div>
  );
}

export default App;
