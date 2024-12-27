import { FormContainer, InputContainer } from './styles'
import { Input, Icon } from '../../styles'

import PhoneIcon from '../../assets/phone.svg'
import ContactIcon from '../../assets/user.svg'
import EmailIcon from '../../assets/email.svg'

const Cadastro = () => (
  <>
    <FormContainer>
      <InputContainer>
        <Icon src={ContactIcon} />
        <Input type="text" placeholder="Nome" />
      </InputContainer>
      <InputContainer>
        <Icon src={PhoneIcon} />
        <Input type="number" placeholder="Telefone" />
      </InputContainer>
      <InputContainer>
        <Icon src={EmailIcon} />
        <Input type="text" placeholder="E-mail" />
      </InputContainer>
    </FormContainer>
  </>
)

export default Cadastro
