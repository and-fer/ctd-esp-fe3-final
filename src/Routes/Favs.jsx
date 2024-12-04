import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Favs = () => {
   const { state } = useContext(ContextGlobal)
   const storedFavs = JSON.parse(localStorage.getItem('DENTISTA'))

   console.log('STATE FROM FAVS ///', state.favs)
   return (
      <>
         <h1>Dentists Favs</h1>
         <div className='card-grid'>
            {/* este componente debe consumir los destacados del localStorage */}
            {/* Deberan renderizar una Card por cada uno de ellos */}
            {storedFavs?.map(dentista => (
               <Card
                  key={dentista.id}
                  id={dentista.id}
                  name={dentista.name}
                  username={dentista.username}
               />
            ))}
            {/* {storedFavs.map(d => (
               <Card key={storedFavs.id} id={storedFavs.id} />
            ))} */}
         </div>
      </>
   )
}

export default Favs
