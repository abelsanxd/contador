import { useState } from "react";

useState;

const Contador = () => {
  //aqui agrego la logica del componente

  //  let numero = 1;
  //aqui me creo el state

  const [numero, setNumero] = useState(1);

  //  const sumar = () => {
  //     setNumero(numero + 1)
  //  }
  //   const restar = () => {
  //     setNumero(numero - 1);
  //   };
  return (
    //aqui puedo agregar un poquito de logica

    <section className="text-center">
      {/* aqui va la zona del maquetado */}
      <h2>Contador</h2>
      <p>{numero}</p>
      <button
        className="btn btn-primary me-2"
        onClick={() => setNumero(numero + 1)}
      >
        +1
      </button>
      <button className="btn btn-danger" onClick={() => setNumero(numero - 1)}>
        -1
      </button>
      {/* tarea:agregar la funcion restar el valor de state numero */}
    </section>
  );
};

export default Contador;
