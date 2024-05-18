import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const removeAllContacts = async () => {
    const file = path.resolve(PATH_DB);
    await fs.writeFile(file, '[]', 'utf-8');
};

await removeAllContacts();
