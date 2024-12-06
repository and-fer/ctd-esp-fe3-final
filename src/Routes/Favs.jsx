import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Favs = () => {
  const { state: dentistas } = useContext(ContextGlobal)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentistas.favs?.map((dentista) => (
          <Card
            key={dentista.id}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
          />
        ))}
      </div>
    </>
  )
}

export default Favs
