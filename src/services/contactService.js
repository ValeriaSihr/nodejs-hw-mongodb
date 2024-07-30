import Contact from '../model/contact';

const getContact = async () => {
  return await Contact.find({});
};

const getContactById = async (contactId) => {
  return await Contact.findById(contactId);
};

export { getContact, getContactById };
