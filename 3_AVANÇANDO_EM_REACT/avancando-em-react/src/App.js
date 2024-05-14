import './App.css';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Conditionals from './components/Conditionals';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

import AstonMartin from './assets/aston-martin.jpg'
import { useState } from 'react';

function App() {
const cars = [
  {id: 1, brand: "Ferrari", color: "vermelho", newCar: true, km: 0},
  {id: 2, brand: "Lamborguini", color: "amarelo", newCar: false, km: 2000},
  {id: 3, brand: "Aston Martin", color: "verde", newCar: false, km: 500}
]

const showMessage = () => {
  console.log("evento do componente pai")
}

const handleMessage = (msg) => {
  setMessage(msg);
}

const [message, setMessage] = useState("");

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      <div>
        <h2>Imagem armazenada em public</h2>
        <img src="/ferrari.webp" alt="ferrari" />
      </div>
      <div>
        <h2>Imagem armazenada em assets</h2>
        <img src={AstonMartin} alt="aston-martin" />
      </div>

      <ManageData></ManageData>

      <ListRender></ListRender>

      <Conditionals></Conditionals>
      <ShowUserName name="Matheus"/>

      <CarDetails brand="VW" km={20} color="azul"/>
      <CarDetails brand="Ford" km={1000} color="branco"/>

      {cars.map(car => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      <Fragment param="testando param"/>

      <Container prop="tambem tem prop">
        <h2>teste de children</h2>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      <Message msg={message} />

      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
