
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username : '',
    misc: '' // add new state values as needed 
  }

  export const updateClient = createSlice({
    name: 'update',
    initialState,
    reducers: {
      updateUsername: (state, action) => {
        state.username = action.payload
      }},
  });

  export const { updateUsername} = updateClient.actions;

  export default updateClient.reducer