import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  // 4 - css inline dinamico
  const n = 15;
  // 5 - classes dinâmicas 
  const redTitle = true;

  return (
    <div className="App">
      {/* 1 - css no react */}
      <h1>CSS no React</h1>
      {/* 2 - css de componente */}
      <MyComponent/>
      <p>Pegou o css do meu componente</p>
      {/* 3 - inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px solid orange"}}>Este elemento tem estilos inline</p>
      {/* 4 - inline style dinâmico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>CSS Dinâmico</h2>
      <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>CSS Dinâmico 2</h2>
      {/* 5 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse título tem uma classe</h2>
      {/* 6 - css modules */}
      <Title/>
      <p>Assim não pega o estilo do meu componente</p>
    </div>
  )
}

export default App