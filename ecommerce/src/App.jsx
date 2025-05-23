import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
    <NavBar />
      <h1>hola</h1>
      <ItemListContainer  greeting="¡Bienvenida a nuestra tienda!" />
    </>
  )
}

export default App
