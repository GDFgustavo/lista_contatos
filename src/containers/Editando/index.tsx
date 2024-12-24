import { Avatar, Nome } from '../../components/Contato/styles'
import {
  CardEditando,
  InputContainer,
  FormContainer,
  BotaoEditar,
  BarraAcoes
} from './styles'
import { BotaoRemoverCancelar, BotaoVoltar, Icon, Input } from '../../styles'

import PhoneIcon from '../../assets/phone.svg'
import ContactIcon from '../../assets/user.svg'

const Editando = () => (
  <>
    <CardEditando>
      <Avatar size="large" fontSize={32}>
        G
      </Avatar>
      <Nome>Gustavo</Nome>
    </CardEditando>
    <FormContainer>
      <InputContainer>
        <Icon src={PhoneIcon} />
        <Input type="number" placeholder="Telefone" />
      </InputContainer>
      <InputContainer>
        <Icon src={ContactIcon} />
        <Input type="text" placeholder="Nome" />
      </InputContainer>
    </FormContainer>
    <BarraAcoes>
      <BotaoEditar>Editar</BotaoEditar>
      <BotaoRemoverCancelar>Excluir</BotaoRemoverCancelar>
    </BarraAcoes>
    <BotaoVoltar to="/" />
  </>
)

export default Editando
