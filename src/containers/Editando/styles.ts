import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Nome } from '../../components/Contato/styles'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  background-image: linear-gradient(
    45deg,
    ${variaveis.principal},
    ${variaveis.cinza}
  );
  border-radius: 10px;
  margin-bottom: 32px;
  margin-top: 16px;
`

export const NomeEdit = styled(Nome)`
  font-weight: bold;
`
