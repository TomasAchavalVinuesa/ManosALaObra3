

function Titulo(props){
    return(
        <h1 className="title">{props.titulo}</h1> // acá pensaba en poner className={props.clases} para hacerlo más dinámico pero al saber que solo se usará una clase en esta parte del proyecto me conviene usar la clase que tendrá
    ); //título podría no pasarlo como un prop pero si luego quiero hacer la lista de tareas de otra persona me conviene usarlo así
}

export default Titulo;