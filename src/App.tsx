import Phone from './containers/Phone'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Phone />
      </Container>
    </>
  )
}

export default App
