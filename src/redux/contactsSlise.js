import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    addUser: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
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
      const index = state.contacts.items.findIndex(
        user => user.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
