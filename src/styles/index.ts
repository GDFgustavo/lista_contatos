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

export const TelaContainer = styled.div`
  overflow-y: scroll;
  height: 488px;
  padding: 8px;
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export default EstiloGlobal
