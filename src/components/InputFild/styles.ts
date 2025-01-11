import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid ${variaveis.cinza};

  &:hover {
    border: 2px solid #696969;
  }
`

export const Input = styled.input`
  flex: 1;
  padding: 4px;
  border: none;
  outline: none;
  width: 200px;
  background: transparent;
  color: ${variaveis.textColor};
`
