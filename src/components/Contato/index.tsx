import { useDispatch } from 'react-redux'
import ClassContact from '../../models/Contato'
import { selecionarContato } from '../../store/reducers/contatos'
import { A, Avatar, Card, Nome } from './styles'
import ContactIcon from '../../assets/user.svg'
import { Icon } from '../../styles'

export type Props = {
  size?: string
  fontSize?: number
}

export type ContactProps = ClassContact

const Contato = ({ nome, id, telefone }: ContactProps) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(selecionarContato(id))
  }

  return (
    <>
      <A to="/editar" onClick={handleClick}>
        <Card>
          <Avatar>{nome ? nome[0] : <Icon src={ContactIcon} />}</Avatar>
          <Nome>{nome ? nome : telefone}</Nome>
        </Card>
      </A>
    </>
  )
}

export default Contato
