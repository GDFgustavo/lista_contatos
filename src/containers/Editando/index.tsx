import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Avatar, Nome } from '../../components/Contato/styles'
import { Card } from './styles'
import InputFild from '../../components/InputFild'
import { Botao, BotaoRemoverCancelar, FormContainer } from '../../styles'
import PhoneIcon from '../../assets/phone.svg'
import ContactIcon from '../../assets/user.svg'
import EmailIcon from '../../assets/email.svg'

import { editar, remover } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

const Editando = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const contatoSelecionado = useSelector(
    (state: RootReducer) => state.contatos.contatoSelecionado
  )

  const {
    nome: nomeOriginal,
    telefone: telefoneOriginal,
    email: emailOriginal,
    id
  } = contatoSelecionado

  useEffect(() => {
    setNome(nomeOriginal)
    setTelefone(String(telefoneOriginal))
    setEmail(emailOriginal)
  }, [nomeOriginal, telefoneOriginal, emailOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone(String(telefoneOriginal))
    setEmail(emailOriginal)
  }

  const removerContato = () => {
    dispatch(remover(id))
    navigate('/contatos')
  }

  const salvarEdicao = () => {
    dispatch(
      editar({
        nome,
        telefone,
        email,
        id
      })
    )
    navigate('/contatos')
  }

  const buttonDisabled = !nome && !telefone

  return (
    <>
      <Card>
        <Avatar size="large" fontSize={32}>
          {nome[0]}
        </Avatar>
        <Nome>{nome ? nome : telefone}</Nome>
      </Card>
      <FormContainer>
        <InputFild
          disabled={estaEditando}
          src={ContactIcon}
          value={nome}
          onChange={setNome}
          type="text"
          placeholder="Nome"
          maxLength={15}
        />
        <InputFild
          disabled={estaEditando}
          src={PhoneIcon}
          value={telefone}
          onChange={setTelefone}
          type="tell"
          placeholder="Telefone"
          maxLength={22}
        />
        <InputFild
          disabled={estaEditando}
          src={EmailIcon}
          value={email}
          onChange={setEmail}
          type="text"
          placeholder="E-mail"
        />
      </FormContainer>
      {estaEditando ? (
        <>
          <Botao onClick={salvarEdicao} disabled={buttonDisabled}>
            Salvar
          </Botao>
          <BotaoRemoverCancelar onClick={cancelarEdicao}>
            Cancelar
          </BotaoRemoverCancelar>
        </>
      ) : (
        <>
          <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
          <BotaoRemoverCancelar onClick={() => removerContato()}>
            Excluir
          </BotaoRemoverCancelar>
        </>
      )}
    </>
  )
}

export default Editando
