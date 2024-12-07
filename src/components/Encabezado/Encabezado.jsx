import BotonYEntradaTexto from "../BotonYEntradaTexto/BotonYEntradaTexto.jsx";
import Titulo from "../Titulo/Titulo.jsx";

function Encabezado({ addTask }){
    return(
        <div>
            <Titulo titulo="LISTA DE TAREAS DE TOMAS"/>
            <BotonYEntradaTexto addTask={addTask}/>
        </div>
    );
}

export default Encabezado;
