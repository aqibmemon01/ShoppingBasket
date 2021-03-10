import { configureStore } from '@reduxjs/toolkit'
import {basketSlice} from './slice'

export const store = configureStore({ reducer: basketSlice.reducer })

// export store;