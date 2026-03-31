import React from 'react'

export default function Board({winner,value,go,setGo,id,cells,SetCells}) {
  const handleClick =(e)=>{
    if(winner){
      e.preventDefaut()
    }
    if(!cells[id]){
      if(go === 'circle'){
        handelCellChange('circle');
        setGo('cross');
      } else if(go === 'cross'){
        handelCellChange('cross');
        setGo('circle')
      }
    }
  }
  const handelCellChange =(shap)=>{
    let copyCells = [...cells];
    copyCells[id]=shap;
    SetCells(copyCells);
  }
  return (
    <div className='board' onClick={handleClick}> 
        <div className={value}>
          {value?(value==="circle"?'O':'X'):value}
        </div>
    </div>
  )
}

