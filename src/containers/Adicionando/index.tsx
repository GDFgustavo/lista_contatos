import { useNavigate } from 'react-router-dom'
import { BotaoRemoverCancelar, BotaoSalvar } from '../../styles'
// import InputFild from '../../components/InputFild'
import { TituloAdd } from './styles'

const Adicionando = () => {
  const navigate = useNavigate()
  return (
    <>
      <TituloAdd>Adicionar</TituloAdd>
      {/* <InputFild /> */}
      <BotaoSalvar>Salvar</BotaoSalvar>
      <BotaoRemoverCancelar onClick={() => navigate('/')}>
        Cancelar
      </BotaoRemoverCancelar>
    </>
  )
}

export default Adicionando
