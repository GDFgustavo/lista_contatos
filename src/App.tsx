import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import Adicionar from './pages/Adicionar'
import Editar from './pages/Editar'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/adicionar',
    element: <Adicionar />
  },
  {
    path: '/editar',
    element: <Editar />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
