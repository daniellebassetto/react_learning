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
  const {color} = useTitleColorContext();
  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter/>
    </div>
  )
}

export default Home