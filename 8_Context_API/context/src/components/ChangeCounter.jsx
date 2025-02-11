import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function ChangeCounter() {
    const { counter, setCounter } = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  )
}

export default ChangeCounter