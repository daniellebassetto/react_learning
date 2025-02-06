function Container({children}) {
  return (
    <div>
        <h1>Conteúdo componente pai: </h1>
        {children}
    </div>
  )
}

export default Container