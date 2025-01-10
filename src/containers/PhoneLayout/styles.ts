import styled from 'styled-components'
import fundo from '../../assets/wallpaper.jpg'

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  padding: 0px 8px 16px;
  height: 600px;
  border: 12px solid black;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  &.com-imagem {
    background: url(${fundo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.sem-imagem {
    background: #fff;
  }
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
