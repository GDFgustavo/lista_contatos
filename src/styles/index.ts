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
  width: 300px;
  height: 600px;
  padding: 0;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  border: 12px solid black;
`

export const TelaContainer = styled.div`
  overflow-y: scroll;
  height: 444px;
  padding: 8px;
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export default EstiloGlobal
