import styled from 'styled-components'

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

export const Notch = styled.div`
  width: 120px;
  height: 30px;
  margin: auto;
  background-color: #000;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

export const Tela = styled.div`
  overflow-y: auto;
  flex: 1;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
`
