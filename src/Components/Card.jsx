import { useContext, useEffect } from 'react'
import { ContextGlobal } from './utils/global.context'

const Card = ({ name, username, id }) => {
  const { datosDentista } = useContext(ContextGlobal)
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  const dentista = datosDentista.find((dentista) => dentista.id === id)

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <p>{dentista.id}</p>
      <p>{dentista.name}</p>
      <p>{dentista.username}</p>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  )
}

export default Card
