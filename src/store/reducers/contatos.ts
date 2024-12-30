import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ClassContact from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new ClassContact('Gustavo', 999023414, 'gustavo@1355.com', 1),
    new ClassContact('João', 123456789, 'joao@3256.com', 2),
    new ClassContact('Leo', 987654321, 'leo@4310.com', 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
