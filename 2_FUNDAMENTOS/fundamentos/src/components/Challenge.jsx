const Challenge = () => {
    let valor1 = 5;
    let valor2 = 10;
    
    const SomaValores = () => {
        console.log(valor1 + valor2);
    }

    return (
        <div>
            <h1>a soma de {valor1} e {valor2} irá aparecer no console ao clicar no botão abaixo</h1>
            <button onClick={SomaValores}>Clique aqui!</button>
        </div>
    );
}

export default Challenge;