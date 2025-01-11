import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Props } from '.'
import variaveis from '../../styles/variaveis'

export const A = styled(Link)`
  text-decoration: none;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    45deg,
    ${variaveis.principal},
    ${variaveis.cinza}
  );
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  transition: all 0.1s ease;
  border: 2px solid ${variaveis.principal};

  &:hover {
    border: 2px solid ${variaveis.cinza};
  }
`

export const Nome = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
  color: ${variaveis.textColor};
`

export const Avatar = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '16px')};
  font-weight: bold;
  text-transform: uppercase;
  width: ${(props) => (props.size === 'large' ? '100px' : '24px')};
  height: ${(props) => (props.size === 'large' ? '100px' : '24px')};
  color: ${variaveis.textColor};
  border-radius: 50%;
  border: 2px solid ${variaveis.avatar};
`
