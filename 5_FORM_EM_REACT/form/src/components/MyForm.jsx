import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  // 3 - gerenciamento de dados
  const[name, setName] = useState()
  const[email, setEmail] = useState()

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulário")
    console.log(name, email)
  }

  // console.log(name);
  // console.log(email);

  return (
    <div>
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite seu nome' onChange={handleChangeName} />
        </div>

        {/* 2 - tag label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
        
    </div>
  )
}

export default MyForm