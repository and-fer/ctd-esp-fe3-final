import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { ContextProvider } from './Context/Context'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
