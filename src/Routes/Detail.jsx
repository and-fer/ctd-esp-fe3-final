import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Context/Context'

const Detail = () => {
  const { id } = useParams()
  const { state: dentistas } = useContext(ContextGlobal)
  const dentista = dentistas.data.find((d) => d.id.toString() === id)

  if (!dentista) {
    return <h1>¡Dentista no encontrado!</h1>
  }

  return (
    <div>
      <h1>Detalle de dentista con id {id} </h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{dentista.name}</th>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail
