import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre} 
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                setValor={setPuesto} 
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                setValor={setFoto}  
            />
            <ListaOpciones 
                valor={equipo} 
                setValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                setValor={actualizarTitulo} 
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required 
                valor={color} 
                setValor={actualizarColor} 
                type="color"
            />
            <Boton texto="Registrar equipo" />
        </form>
    </section>
}

export default Formulario