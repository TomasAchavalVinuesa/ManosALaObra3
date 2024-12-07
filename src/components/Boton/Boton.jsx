function Boton({ clase, texto, onClick }){
    return(
        <button className={clase} onClick={onClick}>{texto}</button>
        
    );
}

export default Boton;