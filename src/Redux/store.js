import { configureStore } from '@reduxjs/toolkit'
import subReducer from './SubSlice'

export const store = configureStore({
    reducer: {
        sub:subReducer
    },
  })
