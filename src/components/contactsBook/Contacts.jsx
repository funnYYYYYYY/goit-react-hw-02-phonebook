import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          deleteContact={deleteContact}
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};
