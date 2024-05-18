import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const thanos = async () => {
    const file = path.resolve(PATH_DB);
    const data = await fs.readFile(file, 'utf-8');
    const contacts = JSON.parse(data) || [];

const forgivenContact = contacts.filter(()=> Math.random() > 0.5);


    await fs.writeFile(file, JSON.stringify(forgivenContact, null, 2), 'utf-8');
};

await thanos();
