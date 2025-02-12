import { useEffect, useState } from "react"

const HookUseEffect = () => {

  /* 1 - useEffect sem dependências
  Será executado toda vez que o componente renderizar
  O que acontece na prática?
  1. Renderização inicial: O console.log("Estou sendo executado") será chamado.
  2. Quando clicar no botão (changeSomething é chamado e atualiza o estado number), o componente re-renderiza, e o useEffect executa novamente.
  3. Como não há um array de dependências, o useEffect sempre será chamado após cada renderização.
  */
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  }

  /* 2 - Array de dependências vazio 
  Quando queremos que ele execute apenas uma vez, colocamos um array de dependências vazio 
  */
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  /* 3 - Array de dependência com valores
  Quando colocamos algo no array de dependências, significa que sempre que este dado
  for modificado, o useEffect executará
  Isso permite a reutilização, e de forma controlada 
  */  
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if(anotherNumber > 0){
      console.log("Sou executado apenas quando muda o anotherNumber")
    }
  }, [anotherNumber])

  // 4 - cleanup do useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello world")
      setAnotherNumber(anotherNumber + 1)
    }, 2000);
    return () => clearTimeout(timer) // executa por exemplo ao mudar de tela
  }, [anotherNumber])

  return (
    <div>
      <div>useEffect</div>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o another</button>
    </div>
  )
}

export default HookUseEffect