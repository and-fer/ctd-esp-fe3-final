import { useState } from 'react'

const Form = ({ setSuccessForm }) => {
   //Aqui deberan implementar el form completo con sus validaciones
   const [datosUsuario, setDatosUsuario] = useState({
      nombre: '',
      email: '',
   })
   const [nombreEnviado, setNombreEnviado] = useState('')

   const [error, setError] = useState(false)
   const [isSubmitted, setIsSubmitted] = useState(false)

   let emailRegex = /^[w-].+@([\w-]+\.)+[\w-]{2,4}$/

   const handleNombre = event => {
      setDatosUsuario({ ...datosUsuario, nombre: event.target.value })
   }

   const handleEmail = event => {
      setDatosUsuario({ ...datosUsuario, email: event.target.value })
   }

   const handleSubmit = event => {
      // Prevent default form submission
      event.preventDefault()

      if (
         datosUsuario.nombre.trim().length >= 3 &&
         datosUsuario.email.trim().length >= 6
      ) {
         setError(false)
         setNombreEnviado(datosUsuario.nombre)
         setDatosUsuario({ nombre: '', email: '' })

         setIsSubmitted(true)
         console.log('Nombre:', datosUsuario.nombre)
         console.log('Email:', datosUsuario.email)
         setSuccessForm(true)
      } else {
         setError(true)
      }
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Nombre'
               name='nombre'
               id='nombre'
               value={datosUsuario.nombre}
               onChange={handleNombre}
               disabled={isSubmitted}
            />
            <input
               type='email'
               placeholder='Email'
               name='nombre'
               id='email'
               value={datosUsuario.email}
               onChange={handleEmail}
               disabled={isSubmitted}
            />
            <button type='submit' value='Submit' disabled={isSubmitted}>
               Submit
            </button>
         </form>
         <div>
            {error && <p>Por favor, ingresa bien los datos</p>}
            {isSubmitted && (
               <p>Gracias {nombreEnviado}, te contactaremos lo antes posible</p>
            )}
         </div>
      </div>
   )
}

export default Form
