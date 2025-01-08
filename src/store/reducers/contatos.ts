import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ClassContact from '../../models/Contato'

type ContatosState = {
  itens: ClassContact[]
  contatoSelecionado: ClassContact
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Gustavo',
      telefone: 999023414,
      email: 'gustavo@1355.com'
    },
    {
      id: 2,
      nome: 'João',
      telefone: 123456789,
      email: 'joao@3256.com'
    },
    {
      id: 3,
      nome: 'Leo',
      telefone: 987654321,
      email: 'leo@4310.com'
    }
  ],
  contatoSelecionado: {
    id: 1,
    nome: 'Gustavo',
    telefone: 999023414,
    email: 'gustavo@1355.com'
  }
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    selecionarContato: (state, action: PayloadAction<number>) => {
      const contato = state.itens.find((c) => c.id === action.payload)
      if (contato) {
        state.contatoSelecionado = contato
      }
    },
    editar: (state, action: PayloadAction<ClassContact>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, selecionarContato, editar } = contatosSlice.actions
export default contatosSlice.reducer
