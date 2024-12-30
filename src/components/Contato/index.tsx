import { A, Avatar, Card, Nome } from './styles'

export type Props = {
  size?: string
  fontSize?: number
}

export type ContactProps = {
  nome: string
  telefone?: number
  email?: string
}

const Contato = ({ nome }: ContactProps) => {
  return (
    <>
      <A to="/editar">
        <Card>
          <Avatar>{nome[0]}</Avatar>
          <Nome>{nome}</Nome>
        </Card>
      </A>
    </>
  )
}

export default Contato
