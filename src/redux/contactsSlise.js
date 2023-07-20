import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addUser: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteUser(state, action) {
      const index = state.contacts.findIndex(
        user => user.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
