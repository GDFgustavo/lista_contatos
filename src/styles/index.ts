import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  padding: 0px 8px 16px;
  height: 600px;
  background: #fff;
  border: 12px solid black;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`

export const TelaContainer = styled.div`
  overflow-y: auto;
  flex: 1;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
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
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
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

export const BotaoRemoverCancelar = styled(Botao)`
  // ...
`

export default EstiloGlobal
