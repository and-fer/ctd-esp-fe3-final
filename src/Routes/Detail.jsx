import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
   const { id } = useParams()
   const { state: dentistas } = useContext(ContextGlobal)
   const dentista = dentistas.data.find(d => d.id.toString() === id)

   if (!dentista) {
      return <h1>¡Dentista no encontrado!</h1>
   }

   return (
      <div>
         <h1>Detalle de dentista con id {id} </h1>
         <table>
            <thead>
               <tr>
                  <th scope='col'>Nombre</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Teléfono</th>
                  <th scope='col'>Website</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope='row'>{dentista.name}</th>
                  <td>{dentista.email}</td>
                  <td>{dentista.phone}</td>
                  <td>{dentista.website}</td>
               </tr>
            </tbody>

            {/* <h2>{dentista.name}</h2>
            <h3>{dentista.email}</h3>
            <h3>{dentista.phone}</h3>
            <h4>{dentista.website}</h4> */}
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
         </table>
      </div>
   )
}

export default Detail
