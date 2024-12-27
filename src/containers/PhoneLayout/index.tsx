import { Notch, PhoneContainer, Tela } from './styles'
import { BotaoVoltar } from '../../styles'
import BarraSuperior from '../../components/BarraSuperior'

type PhoneProps = {
  children: React.ReactNode
  showBarraSuperior?: boolean
}

const PhoneLayout: React.FC<PhoneProps> = ({
  children,
  showBarraSuperior = false
}) => {
  return (
    <PhoneContainer>
      <Notch />
      {showBarraSuperior && <BarraSuperior />}
      <Tela>{children}</Tela>
      <BotaoVoltar to="/" />
    </PhoneContainer>
  )
}

export default PhoneLayout
