export const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li>
      <p>
        {contact.name}:{contact.number}
      </p>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};
