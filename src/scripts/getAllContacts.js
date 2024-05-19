import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data) || [];
    return contacts;
};

console.log(await getAllContacts());
