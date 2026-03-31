
import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board'

// winning states
const winningStates=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function App() {
  const [cells, setCells] =useState(["","","","","","","","",""]);
  const [playerGo, setPlayerGo] = useState('cross');
  const [winner, setWinner ] =useState("");


  useEffect(()=>{
    winningStates.forEach(winning=>{
      let circleWinner = winning.every(cell =>cells[cell] === 'circle');
      let crossWinner = winning.every(cell => cells[cell] === 'cross');
      
        if(circleWinner){
          setWinner('circle');
          return;
        }else if(crossWinner){
          setWinner("cross");
          return;
        }
    });
  },[cells])

  useEffect(()=>{
    if(!winner && cells.every(cell=> cell !== "")){
      setWinner('no winner it is draw !');
    }
  },[cells,winner])
  
  return (
    <div className="main-container">
        <div className="gaming-pad">
          
          {
            cells.map((cell,index) =>{
              return <Board 
                id={index}
                cells={cells}
                SetCells={setCells}
                go={playerGo} 
                setGo={setPlayerGo} 
                key={index}
                value={cell}
                winner={winner}
                />
            })
          }
          
      </div>
      <div className='details'>
        <div className={winner ? 'winner':'noWinner'}>
          The winner is : <span>{winner}</span>
        </div>
        <div className={winner?'no-turn':'player-turn'}>
          The player turn is : <span>{playerGo}</span>
        </div>
      </div>
      

    </div>
  )
}

export default App
