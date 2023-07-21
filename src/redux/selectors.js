import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.contactsUser.contacts.items;
export const selectFilter = state => state.filterUser.filter;
export const selectUsersQuantity = state =>
  state.contactsUser.contacts.items.length;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    return users.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// const users = useSelector(selectUsers);
// const filter = useSelector(selectFilter);

// const searchUserBook = () => {
//   return users.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// const searchUser = searchUserBook();
