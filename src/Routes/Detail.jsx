import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const { datosDentista } = useContext(ContextGlobal)
  const dentista = datosDentista.find((d) => d.id.toString() === id)

  if (!dentista) {
    return <h1>Dentista no encontrado!</h1>
  }

  return (
    <div>
      <h1>Detail Dentist {id} </h1>
      <h2>{dentista.name}</h2>
      <h3>{dentista.email}</h3>
      <h3>{dentista.phone}</h3>
      <h4>{dentista.website}</h4>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail
