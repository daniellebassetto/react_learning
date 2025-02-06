
function ConditionalRender() {
    const x = true;

    const name = "Danielle";
  return (
    <div>
        {/* 7 - render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}
        {/* 8 - else */}
        {name === "Ana" ? (
            <div>
                <p>Olá, Ana!</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender