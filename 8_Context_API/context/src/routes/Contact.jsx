import React from 'react'
// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

function Contact() {
  // 5 - contexto mais complexo
    const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Página de contato</h1>
    </div>
  )
}

export default Contact