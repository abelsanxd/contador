

const Contador = () => {
    //aqui agrego la logica del componente

     let numero = 1;

    // const [numero, setNumero] = useState(1);
     const sumar = () => {
        numero = numero + 1;
        console.log(numero)
     }
     const restar = () => {
        numero = numero - 1;
        
     }

    return (

        //aqui puedo agregar un poquito de logica

        <section className='text-center'>
            {/* aqui va la zona del maquetado */}
            <h2 >Contador</h2>
            <p>{numero}</p>
            <button className='btn btn-primary me-2' onClick={sumar}>+1</button>
            <button className='btn btn-danger' onClick={restar}>-1</button>
        </section>
    );
};

export default Contador;