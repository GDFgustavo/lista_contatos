import styled from 'styled-components'
import { Titulo } from '../../styles'
import variaveis from '../../styles/variaveis'

export const TituloAdd = styled(Titulo)`
  text-align: center;
  margin: 16px;
  color: ${variaveis.textColor};
`

export const MensageError = styled.p`
  border-radius: 10px;
  font-weight: 400;
  text-align: center;
  padding: 8px;
  transition: 0.5s ease;
  margin-top: 16px;
  border: 2px solid ${variaveis.cinza};
  color: ${variaveis.textColor};

  &.visible {
    opacity: 1;
  }

  &.hidden {
    opacity: 0;
  }
`
