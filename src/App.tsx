import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import Adicionar from './pages/Adicionar'
import Editar from './pages/Editar'

import store from './store'
import TelaInicial from './containers/TelaInicial'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <TelaInicial />
  },
  {
    path: '/contatos',
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
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
