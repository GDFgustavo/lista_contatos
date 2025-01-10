import { useNavigate } from 'react-router-dom'
import PhoneLayout from '../PhoneLayout'

import ContactIcon from '../../assets/user.svg'
import { AppIcon, P } from './styles'

const TelaInicial = () => {
  const navigate = useNavigate()
  return (
    <PhoneLayout wallpaper={true}>
      <AppIcon onClick={() => navigate('/contatos')}>
        <img src={ContactIcon} />
      </AppIcon>
      <P>Contatos</P>
    </PhoneLayout>
  )
}

export default TelaInicial
