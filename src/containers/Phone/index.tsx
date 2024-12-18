import BarraSuperior from '../../components/BarraSuperior'
import Tela from '../Tela'
import { Notch, PhoneContainer } from './styles'

const Phone = () => {
  return (
    <PhoneContainer>
      <Notch />
      <BarraSuperior />
      <Tela />
    </PhoneContainer>
  )
}

export default Phone
