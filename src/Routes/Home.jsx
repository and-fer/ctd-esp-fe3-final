import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const { state: dentistas } = useContext(ContextGlobal)

  return (
    <main className="Home">
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.data.map((dentista) => (
          <Card
            key={dentista.id}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
