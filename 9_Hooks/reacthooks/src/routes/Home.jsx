import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"
import HookUseRef from "../components/HookUseRef"

import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

function Home() {
  const {contextValue} = useContext(SomeContext);

  return (
    <div>
        <h1>Home</h1>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <HookUseRef/>
    </div>
  )
}

export default Home