import './App.css'

// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from './components/Data';

// 4 - Renderização de lista
import ListRender from './components/ListRender';

// 7 - Renderização condicional
import ConditionalRender from './components/ConditionalRender';

// 8 - Props
import ShowUserName from './components/ShowUserName';

// 9 - Desestruturando props
import CarDetails from './components/CarDetails';

// 11 - renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  {id: 2, brand: "KIA", color: "Branco", km: 200000 },
  {id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - fragment
import Fragment from './components/Fragment';

// 13 - children
import Container from './components/Container';

// 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction';

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {
  // 14 - função em prop
  function showMessage(){
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className='App' style={{paddindBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data/>
      {/* 4 - render de lista */}
      <ListRender/>
      {/* 7 - render condicional */}
      <ConditionalRender/>
      {/* 8 - props */}
      <ShowUserName name="Dani"/>
      {/* 9 - desestruturando props */}
      <CarDetails brand="Ford" km={999} color="Vermelho"/>
      {/* 10 - reaproveitamento de componente */}
      <CarDetails brand="Fiat" km={123444} color="Branco"/>
      <CarDetails brand="Audi" km={9987} color="Azul"/>
      {/* 11 - renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} />
      ))}
      {/* 12 - fragment */}
      <Fragment/>
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* 15 - state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
