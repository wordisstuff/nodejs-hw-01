import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const getAllContacts = async () => {
    const file = path.resolve(PATH_DB);
    const data = await fs.readFile(file, 'utf-8');
    const contacts = JSON.parse(data) || [];
    return contacts;
};

console.log(await getAllContacts());
