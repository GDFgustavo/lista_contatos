import { Titulo } from '../../styles'
import BotaoAdicionar from '../BotaoAdicionar'
import { BarraContainer } from './styles'

const BarraSuperior = () => {
  return (
    <>
      <BarraContainer>
        <Titulo>Contatos</Titulo>
        <BotaoAdicionar />
      </BarraContainer>
    </>
  )
}

export default BarraSuperior
