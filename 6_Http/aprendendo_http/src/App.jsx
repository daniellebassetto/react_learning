import { useEffect, useState } from 'react'

const url = "http://localhost:3000/products";

import { useFetch } from './hooks/useFetch';

import './App.css'

function App() {
  // 1 - resgatando dados
  const [products, setProducts] = useState([]);

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {
    
  //   async function getData(){
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   getData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");
  };

  return (
    <div className='App'>
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {/* 7 - tratamento de erros */}
      {error && <p>{error}</p>}
      {/* 1 - resgate de dados */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
      </ul>
      {/* 2 - enviando dados */}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
{/*       <input type="submit" value="Criar" /> */}
          {/* 7 - loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}        
        </form>
      </div>
    </div>
  )
}

export default App
