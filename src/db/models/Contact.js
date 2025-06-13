import { model, Schema } from 'mongoose';
import { validPhone } from '../../constants/contacts.js';
import { handleSaveError, setUpdateSettings } from './hooks.js';

export const contactsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, match: validPhone, required: true },
    number: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);
contactsSchema.post('save', handleSaveError);
contactsSchema.pre('findOneAndUpdate', setUpdateSettings);
contactsSchema.post('findOneAndUpdate', handleSaveError);

export const ContactsModel = model('Contact', contactsSchema);
