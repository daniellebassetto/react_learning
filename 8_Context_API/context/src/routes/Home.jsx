// 3 - alterando valor do contexto
// import { useContext } from 'react'
// import { CounterContext } from "../context/CounterContext"

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

import React, { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter';

function Home() {
  // const {counter} = useContext(CounterContext);

  // 4 - refatorando com hook
  const {counter} = useCounterContext();

  // 5 - contexto mais complexo
  const {color, dispatch} = useTitleColorContext();

  // 6 - Alterando contexto complexo
  const setTitleColor = (color) => {
          dispatch({type: color})
  }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter/>

        { /* 6 - Alterando contexto complexo */ }        
        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    </div>
  )
}

export default Home