import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Informacion from "./compontens/Informacion";
import Contador from "./compontens/Contador";

function App() {
  return (
    <>
      <main className="container my-5">
        <h1>Primer proyecto con react</h1>
        <Informacion comision='c89i'></Informacion>
        <Contador/>
      </main>
      ;
    </>
  );
}

export default App;
