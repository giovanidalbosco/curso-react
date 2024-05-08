import { useState } from "react";

const ManageData = () => {
    const someData = 10;

    const [number, setNumber] = useState(15);

    const changeNumber = (number) => {
        setNumber(number + 1);
    }

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => changeNumber(number)}>Mudar variável</button>
            </div>
        </div>
    )
}

export default ManageData;