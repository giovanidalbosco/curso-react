import './App.css';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Conditionals from './components/Conditionals';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

import AstonMartin from './assets/aston-martin.jpg'

function App() {
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
    </div>
  );
}

export default App;
