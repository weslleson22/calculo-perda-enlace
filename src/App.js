import React, { useState } from 'react';
import './App.css'; // Importe o arquivo CSS para aplicar estilos
import logo from './img/logo_wiki.png';

const CalculadoraPerdaEnlace = () => {
  const [txSignal, setTxSignal] = useState(0);
  const [distance, setDistance] = useState(0);
  const [loss, setLoss] = useState(0);
  const [rxSignal, setRxSignal] = useState(0);
  const [distanceMultiplier, setDistanceMultiplier] = useState('0.30'); // Valor padrão '0.30'

  const calcularPerda = () => {
   
    const distanciaKM = parseFloat(distance);

    // Modificando a fórmula para usar Distância em quilômetros * distanceMultiplier
    const distanciaMultiplicada = distanciaKM * parseFloat(distanceMultiplier);
    const sinalRecepcao = txSignal - distanciaMultiplicada;

    setLoss(distanciaMultiplicada.toFixed(2));
    setRxSignal(sinalRecepcao.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Calculadora de Perda de Enlace</h1>
      <label>
        Sinal de Transmissão (Tx) em dBm:<br />
        <input type="number"  className="centered-input" value={txSignal} onChange={(e) => setTxSignal(e.target.value)} />
      </label>
      <br />
      <label>
        Distância em quilômetros:<br />
        <input type="number"   className="centered-input" value={distance} onChange={(e) => setDistance(e.target.value)} />
      </label>
      <br />
      <label>
        Selecione o multiplicador:
        <br />
        <select value={distanceMultiplier} onChange={(e) => setDistanceMultiplier(e.target.value)}>
          <option value="0.30">0.30</option>
          <option value="0.27">0.27</option>
          <option value="0.25">0.25</option>
        </select>
        <br />
      </label>
      <br />
      <button onClick={calcularPerda}>Calcular</button>
      <br />
      <div className="results-container">
        <h2>Resultados:</h2>
        <p>Perda Estimada ({distance} Km* {parseFloat(distanceMultiplier).toFixed(2)}): {loss} dB</p>

        <p>Sinal Estimado de Receção: {rxSignal} dB</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CalculadoraPerdaEnlace />
    </div>
  );
}

export default App;
