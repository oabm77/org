import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/oabm77.png",
      nombre: "Omar Bautista",
      puesto: "Desarrollador",
      fav: true
    },{
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/cadifilippo.png",
      nombre: "Cadi Filippo",
      puesto: "Diseñador",
      fav: false
    },{
      id: uuid(),
      equipo: "Devops",
      foto: "https://github.com/dfm555.png",
      nombre: "Diego Fernandez",
      puesto: "Devops Evangelist",
      fav: false
    },{
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/glrodasz.png",
      nombre: "Guillermo Rodas",
      puesto: "Desarrollador",
      fav: false
    },{
      id: uuid(),
      equipo: "Móvil",
      foto: "https://github.com/QuirogaPau.png",
      nombre: "Pau Quiroga",
      puesto: "Desarrollador Movil",
      fav: false
    },{
      id: uuid(),
      equipo: "Innovación y  Gestión",
      foto: "https://github.com/lucianogarriga.png",
      nombre: "Luciano Barriga",
      puesto: "Emprendedor",
      fav: false
    },
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },{
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },{
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },{
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },{
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },{
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },{
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like ", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* { mostrarFormulario? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
