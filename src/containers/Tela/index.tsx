import { BotaoVoltar, TelaContainer } from '../../styles'
import ListaDeContato from '../ListaDeContatos'

const Tela = () => {
  return (
    <>
      <TelaContainer>
        <ListaDeContato />
        <ListaDeContato />
        <ListaDeContato />
        <BotaoVoltar to="/" />
      </TelaContainer>
    </>
  )
}

export default Tela
