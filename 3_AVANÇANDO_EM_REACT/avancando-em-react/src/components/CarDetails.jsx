const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <div>Detalhes do carro</div>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails