import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const countContacts = async () => {
    const file = path.resolve(PATH_DB);
    const data = await fs.readFile(file, 'utf-8');
    const contacts = JSON.parse(data) || [];
    return contacts.length;
};

console.log(await countContacts());
