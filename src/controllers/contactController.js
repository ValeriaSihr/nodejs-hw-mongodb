import Contact from '../model/contact';

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json({
      status: 'success',
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export { getAllContacts, getContactById };
