import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const ListaDeContato = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos)
  return (
    <>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato nome={c.nome} telefone={c.telefone} email={c.email} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaDeContato
