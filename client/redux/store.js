import {configureStore} from '@reduxjs/toolkit'
import updateReducer from './updateClient'
export const store = configureStore({
    reducer: {
        userUpdate : updateReducer 
    }
})

export default store

