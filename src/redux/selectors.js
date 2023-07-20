export const selectUsers = state => state.contactsUser.contacts.items;
export const selectFilter = state => state.filterUser.filter;
export const selectUsersQuantity = state =>
  state.contactsUser.contacts.items.length;
