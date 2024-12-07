import CheckboxInput from "../CheckboxInput/CheckboxInput.jsx";
import DescripcionTarea from "../DescripcionTarea/DescripcionTarea.jsx";
import Boton from "../Boton/Boton.jsx"

function Tarea({ taskNumber, descripcion, onDelete }) {
    return (
        <li className="task-item">
            <CheckboxInput taskNumber={taskNumber} />
            <DescripcionTarea taskNumber={taskNumber} descripcion={descripcion} />
            <Boton clase="delete-button" texto="🗑" onClick={onDelete} />
        </li>
    );
} 

export default Tarea;