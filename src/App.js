import React, { useState } from 'react';
import './App.css'; // Importe o arquivo CSS para aplicar estilos

const CalculadoraPerdaEnlace = () => {
  const [txSignal, setTxSignal] = useState(0);
  const [distance, setDistance] = useState(0);
  const [loss, setLoss] = useState(0);
  const [rxSignal, setRxSignal] = useState(0);

  const calcularPerda = () => {
    const freqMHz = 2400; // Frequência em MHz
    const distanciaKM = parseFloat(distance);

    // Modificando a fórmula para usar Distância em quilômetros * 0,30
    const distanciaMultiplicada = distanciaKM * 0.30;
    const sinalRecepcao = txSignal - distanciaMultiplicada;

    setLoss(distanciaMultiplicada.toFixed(2));
    setRxSignal(sinalRecepcao.toFixed(2));
  };

  return (
    <div className="calculator-container">
     
      <h1>Calculadora de Perda de Enlace</h1>
      <label>
        Sinal de Transmissão (Tx) em dBm:
        <input type="number" value={txSignal} onChange={(e) => setTxSignal(e.target.value)} />
      </label>
      <br />
      <label>
        Distância em quilômetros:
        <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
      </label>
      <br />
      <button onClick={calcularPerda}>Calcular</button>
      <br />
      <div className="results-container">
        <h2>Resultados:</h2>
        <p>Perda Estimada (Distância * 0.30):{loss} dB</p>
        <p>Sinal Estimado de Receção: {rxSignal} dBm</p>
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
