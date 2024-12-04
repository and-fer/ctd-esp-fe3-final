import { useContext, useEffect } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {
   const { state, dispatch } = useContext(ContextGlobal)

   const dentista = state.data.find(dentista => dentista.id === id)

   const addFav = () => {
      // // Aqui iria la logica para agregar la Card en el localStorage
      let storedDentistas = localStorage.getItem('DENTISTA')

      storedDentistas = storedDentistas ? JSON.parse(storedDentistas) : []

      if (!Array.isArray(storedDentistas)) {
         console.error('storedDentistas no es un Array')
         storedDentistas = []
      }

      const updatedDentistas = [...storedDentistas, dentista]

      localStorage.setItem('DENTISTA', JSON.stringify(updatedDentistas))

      dispatch({
         type: 'ADD_FAV',
         payload: dentista,
      })
      console.log('UP', updatedDentistas)
   }

   return (
      <div className='card'>
         {/* En cada card deberan mostrar en name - username y el id */}
         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
         {/* <p>{dentista.id}</p>
         <p>{dentista.name}</p>
         <p>{dentista.username}</p> */}
         <p>{id}</p>
         <p>{name}</p>
         <p>{username}</p>
         <button onClick={addFav} className='favButton'>
            Agregar a favoritos
         </button>
         <Link to={`/dentist/${id}`}>Ver más</Link>
      </div>
   )
}

export default Card
