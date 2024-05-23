import './App.css';
import MyComponent from './components/MyComponent';
import MyComponent2 from './components/MyComponent2';

function App() {
  return (
    <div className="App">
      <h1>React com css</h1>

      <MyComponent />
      <h2>No entanto este css é no scoped. Ou seja, os estilos vazam do componente</h2>

      <MyComponent2 />
      <h3 className='title'>Desta forma eu consigo estilizar sem vazar</h3>

    </div>
  );
}

export default App;
