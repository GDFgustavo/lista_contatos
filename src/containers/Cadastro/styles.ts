import styled from 'styled-components'
import { Titulo } from '../../styles'

export const TituloAdd = styled(Titulo)`
  text-align: center;
  margin: 16px;
`

export const MensageError = styled.p`
  background-color: #ccc;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  padding: 8px;
  transition: 0.5s ease;
  margin-top: 16px;

  &.visible {
    opacity: 1;
  }

  &.hidden {
    opacity: 0;
  }
`
