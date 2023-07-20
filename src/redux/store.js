import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filterSlise';

export const store = configureStore({
  reducer: {
    contactsUser: contactsReducer,
    filterUser: filterReducer,
  },
});
