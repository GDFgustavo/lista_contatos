import { Notch, PhoneContainer, Tela } from './styles'
import { BotaoVoltar } from '../../styles'
import BarraSuperior from '../../components/BarraSuperior'

export type PhoneProps = {
  children: React.ReactNode
  showBarraSuperior?: boolean
  wallpaper?: boolean
}

const PhoneLayout: React.FC<PhoneProps> = ({
  children,
  showBarraSuperior = false,
  wallpaper = false
}) => {
  return (
    <PhoneContainer className={wallpaper ? 'com-imagem' : 'sem-imagem'}>
      <Notch />
      {showBarraSuperior && <BarraSuperior />}
      <Tela>{children}</Tela>
      <BotaoVoltar to="/" />
    </PhoneContainer>
  )
}

export default PhoneLayout
