import React from 'react'

// 6 - carregando dados
import { useFetch } from '../hooks/useFetch'

const url = "http://localhost:3000/products";

// 7 - rota dinâmica
import {Link} from "react-router-dom"

function Home() {
  const {data: items} = useFetch(url)

  return (
    <div>
        <h1>Home</h1>
        {/* 7 - Carregamento de dados */}
        <ul className="products">
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>R$: {item.price}</p>
                {/* 8 - rota dinamica */}
                <Link to={`/products/${item.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Home