import React from 'react'
import { useState } from 'react'

function HookUseState() {
    // 1 - useState
    let userName = "João";
    const [name, setName] = useState("Dani");

    // 2 - useState e input
    const [age, setAge] = useState(20);

    // Aqui mudamos os dois, mas vemos que apenas um mudou de fato, isso porque o hook
    // consegue renderizar o valor novamente 
    const changeNames = () => {
        userName = "João da Silva";

        setName("Danielle Bassetto");
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      console.log(age)
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>useState: {name}</p>
        <p>variável: {userName}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/* 2 - useState e input */}
        <form onSubmit={handleSubmit}>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
          <input type="submit" value="Enviar"/>
        </form>
        <p>Você tem {age} anos.</p>
        <hr />
    </div>
  )
}

export default HookUseState