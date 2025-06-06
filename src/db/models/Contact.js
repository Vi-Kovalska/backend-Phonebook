import { Schema } from 'mongoose';

export const contactsSchema = new Schema({
  name: {
    type: String,
    require,
  },
  number: {
    type: String,
  },
});
