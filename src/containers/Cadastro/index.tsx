import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Botao, BotaoRemoverCancelar, FormContainer } from '../../styles'
import InputFild from '../../components/InputFild'
import { MensageError, TituloAdd } from './styles'
import PhoneIcon from '../../assets/phone.svg'
import ContactIcon from '../../assets/user.svg'
import EmailIcon from '../../assets/email.svg'

import { cadastrar } from '../../store/reducers/contatos'

const Adicionando = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const cadastrarContato = () => {
    if (!nome && !telefone) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } else {
      dispatch(
        cadastrar({
          nome,
          telefone,
          email
        })
      )
      navigate('/contatos')
    }
  }

  return (
    <>
      <TituloAdd>Adicionar</TituloAdd>
      <FormContainer>
        <InputFild
          src={ContactIcon}
          value={nome}
          onChange={setNome}
          type="text"
          placeholder="Nome"
          maxLength={15}
        />
        <InputFild
          src={PhoneIcon}
          value={telefone}
          onChange={setTelefone}
          type="tell"
          placeholder="Telefone"
          maxLength={20}
        />
        <InputFild
          src={EmailIcon}
          value={email}
          onChange={setEmail}
          type="text"
          placeholder="E-mail"
        />
      </FormContainer>
      <Botao type="submit" onClick={cadastrarContato}>
        Salvar
      </Botao>
      <BotaoRemoverCancelar onClick={() => navigate('/contatos')}>
        Cancelar
      </BotaoRemoverCancelar>
      <MensageError className={error ? 'visible' : 'hidden'}>
        Não é possível salvar o contato sem o nome ou número
      </MensageError>
    </>
  )
}

export default Adicionando
