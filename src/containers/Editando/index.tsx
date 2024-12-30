import { useState } from 'react'
import { Avatar, Nome } from '../../components/Contato/styles'
import { Card } from './styles'
import { Botao, BotaoRemoverCancelar } from '../../styles'

import Cadastro from '../Cadastro'

const Editando = () => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <>
      <Card>
        <Avatar size="large" fontSize={32}>
          G
        </Avatar>
        <Nome>Gustavo</Nome>
      </Card>
      <Cadastro />
      {estaEditando ? (
        <>
          <Botao>Salvar</Botao>
          <BotaoRemoverCancelar onClick={() => setEstaEditando(false)}>
            Cancelar
          </BotaoRemoverCancelar>
        </>
      ) : (
        <>
          <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
          <BotaoRemoverCancelar>Excluir</BotaoRemoverCancelar>
        </>
      )}
    </>
  )
}

export default Editando
