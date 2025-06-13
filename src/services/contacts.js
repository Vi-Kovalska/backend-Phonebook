import { SORT_ORDER } from '../constants/index.js';
import { ContactsModel } from '../db/models/Contact.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = SORT_ORDER.ASC,
  filter = {},
}) => {
  const contactsQuery = ContactsModel.find();
  // filtering

  // sorting

  // pagination
  const limit = perPage;
  const skip = (page - 1) * perPage;
};
