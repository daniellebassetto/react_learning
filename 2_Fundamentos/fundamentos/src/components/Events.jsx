function Events() {
  const handleClick = () => {
    console.log("Executou");
  }

  // 8 - Função de renderização
  const renderSomething = (x) => {
    if(x) {
      return <h5>Renderizando isso!</h5>
    } else {
      return <h5>Renderizando outra coisa!</h5>
    }
  }

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando evento de click")}>Clique aqui</button>
        </div>
        {/* 7 - Evento com função */}
        <div>
          <button onClick={handleClick}>Clique aqui - c/ função</button>
        </div>
        {/* 8 - Função de renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events