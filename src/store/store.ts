import {Action, combineReducers, configureStore, Store, ThunkAction} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

const combinedReducer = combineReducers({

})

export const makeStore = () => configureStore({
  reducer: combinedReducer,
})

export const wrapper = createWrapper<AppStore>(makeStore)

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>
