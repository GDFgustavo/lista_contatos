import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  margin-bottom: 32px;
`

export const Input = styled.input`
  flex: 1;
  padding: 4px;
  border: none;
  outline: none;
  font-weight: bold;
  width: 200px;
`

export const Icon = styled.img`
  width: 32px;
  padding: 8px;
`

export const Botao = styled.button`
  font-weight: 600;
  font-size: 14px;
  width: 40%;
  padding: 8px;
  color: #000;
  border: solid 2px #000;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const BotaoSalvar = styled(Botao)`
  // ...
`

export const BotaoRemoverCancelar = styled(Botao)`
  margin-left: 52px;
`

export const BotaoVoltar = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 6px;
  transform: translateX(-50%);
  height: 4px;
  width: 100px;
  border: none;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #000;
`

export default EstiloGlobal
