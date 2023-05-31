export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectItems = state => state.contacts.items;
export const selectSortedContacts = (state) => {
  const filter = selectFilter(state);
  return  selectItems(state)
    .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));
};