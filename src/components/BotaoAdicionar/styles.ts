import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Botao = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 24px;
  width: 24px;
  color: #000;
  background: transparent;
  border: none;
  border: 2px solid #000;
  border-radius: 50%;
  text-decoration: none;
`
