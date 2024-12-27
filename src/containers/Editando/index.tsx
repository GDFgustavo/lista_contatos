import { Avatar, Nome } from '../../components/Contato/styles'
import { Card } from './styles'
import { Botao, BotaoRemoverCancelar } from '../../styles'

import Cadastro from '../Cadastro'

const Editando = () => (
  <>
    <Card>
      <Avatar size="large" fontSize={32}>
        G
      </Avatar>
      <Nome>Gustavo</Nome>
    </Card>
    <Cadastro />
    <Botao>Editar</Botao>
    <BotaoRemoverCancelar>Excluir</BotaoRemoverCancelar>
  </>
)

export default Editando
