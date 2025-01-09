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
      nome: 'gdfGustavo',
      telefone: 987654321,
      email: 'gdfgustavo24@gmail.com'
    }
  ],
  contatoSelecionado: {
    id: 1,
    nome: 'gdfGustavo',
    telefone: 987654321,
    email: 'gdfgustavo24@gmail.com'
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
    },
    cadastrar: (state, action: PayloadAction<Omit<ClassContact, 'id'>>) => {
      const ultimoContato = state.itens[state.itens.length - 1]
      const novoContato = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.itens.push(novoContato)
    }
  }
})

export const { remover, selecionarContato, editar, cadastrar } =
  contatosSlice.actions
export default contatosSlice.reducer
