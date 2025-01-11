import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 24px;
  width: 24px;
  color: ${variaveis.textColor};
  background: transparent;
  border: none;
  border: 2px solid ${variaveis.textColor};
  border-radius: 50%;
  text-decoration: none;
`
