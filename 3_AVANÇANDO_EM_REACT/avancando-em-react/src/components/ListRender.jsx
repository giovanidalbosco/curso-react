import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Mateus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        {id: 1, name: 'Giovani', age: 33},
        {id: 2, name: 'Marina', age: 31},
        {id: 3, name: 'Alice', age: 0}
    ])

    const deleteRandomUser = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
            <ul>
                {users.map((user) => (<li key={user.id}>{user.name} - {user.age}</li>))}
            </ul>

            <button onClick={deleteRandomUser}>Deletar usuário aleatóriamente</button>
        </div>
    )
};

export default ListRender