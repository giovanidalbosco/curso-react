import { useState } from 'react'

const Conditionals = () => {
  const [x, setX] = useState(true);

  const changeXStatus = () => {
    setX(!x);
  }

  const [name] = useState("João");

  
  return (
    <div>
        <h1>Isso será exibido?</h1>

        <button onClick={changeXStatus}>Click para alterar o status de x</button>

        <p>Status de x é {x.toString()}</p>

        {x && <p>Se x for true, sim</p>}

        {name === "João" ? (
            <div>O nome é joão</div>
        ) : (
            <div>O nome não é joão</div>
        )}
    </div>
  )
}

export default Conditionals