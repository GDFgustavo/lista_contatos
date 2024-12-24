import { A, Avatar, Card, Nome } from './styles'

export type Props = {
  size?: string
  fontSize?: number
}

const Contato = () => {
  return (
    <>
      <A to="/editar">
        <Card>
          <Avatar>G</Avatar>
          <Nome>Gustavo</Nome>
        </Card>
      </A>
    </>
  )
}

export default Contato
