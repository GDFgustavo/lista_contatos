import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Props } from '.'

export const A = styled(Link)`
  text-decoration: none;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #ccc;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  transition: 0.2s ease;

  &:hover {
    background-color: #ddd;
  }
`

export const Nome = styled.h3`
  font-size: 16px;
  margin-left: 8px;
  color: #000;
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
  color: #000;
  border-radius: 50%;
  border: 2px solid #000;
`
