import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const A = styled(Link)`
  text-decoration: none;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #ccc;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 4px;
  transition: 0.2s ease;

  &:hover {
    background-color: #ddd;
  }
`

export const Titulo = styled.h1`
  font-size: 16px;
  padding-left: 8px;
  color: #000;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  background-color: red;
  color: #000;
  border-radius: 50%;
`
