import './App.css';
import Sudoku from './containers/SudokuR';
import sudokuContainer from './css/sudoku_container.module.css'

function App() {
  return (
    <div className={sudokuContainer.game}>
      <Sudoku/> 
    </div>
  );
}

export default App;
