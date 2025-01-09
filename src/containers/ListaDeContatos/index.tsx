import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const ListaDeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <>
      <ul>
        {itens.map((c) => (
          <li key={c.id}>
            <Contato
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaDeContato
