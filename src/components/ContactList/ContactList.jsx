import { useSelector } from 'react-redux';
import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';
import { selectUsers, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

  const searchUserBook = () => {
    return users.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const searchUser = searchUserBook();

  return (
    <s.List>
      {searchUser.map(user => (
        <s.ListItems key={user.id}>
          <ContactListItems user={user} />
        </s.ListItems>
      ))}
    </s.List>
  );
};
