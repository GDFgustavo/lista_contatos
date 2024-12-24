import styled from 'styled-components'
import { Botao } from '../../styles'

export const CardEditando = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  background-color: #ccc;
  border-radius: 10px;
  margin-bottom: 24px;
  margin-top: 16px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  margin-bottom: 132px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #666666;

  &:hover {
    border: 2px solid #000;
  }
`

export const BotaoEditar = styled(Botao)`
  // ...
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52px;
`
