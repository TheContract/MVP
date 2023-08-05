import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        userUpdate : updateReducer 
    }
})

export default store

