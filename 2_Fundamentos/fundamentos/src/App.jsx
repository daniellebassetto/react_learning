import './App.css'

// 2 - Importando componente
import FirstComponent from './components/FirstComponent'

// 4 - Template Expression
import TemplateExpression from './components/TemplateExpression'

// 5 - Hierarquia de componentes
import MyComponent from './components/MyComponent'

// 6 - Eventos
import Events from './components/Events'

// 2 - Importando componente
function App() {
  // 3 - Comentários
  return (
    <div className='App'>
      {/* 3 - Comentário JSX */}
      <h2>Fundamentos do React</h2>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
