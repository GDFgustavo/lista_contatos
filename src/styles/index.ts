import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.5px;
  }

  body {
  background-color: #f1f2f6;
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
  font-weight: 400;
  color: ${variaveis.textColor};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  margin-bottom: 32px;
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
  color: ${variaveis.textColor};
  background-color: ${variaveis.principal};
  border: 2px solid #696969;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const BotaoRemoverCancelar = styled(Botao)`
  margin-left: 52px;
`

export const BotaoVoltar = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 6px;
  transform: translateX(-50%);
  height: 3.5px;
  width: 100px;
  border: none;
  border-radius: 10px;
  background-color: rgba(206, 214, 224, 0.55);
`

export default EstiloGlobal
