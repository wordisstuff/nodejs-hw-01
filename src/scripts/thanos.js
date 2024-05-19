import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data) || [];

const forgivenContact = contacts.filter(()=> Math.random() > 0.5);


    await fs.writeFile(PATH_DB, JSON.stringify(forgivenContact, null, 2), 'utf-8');
};

await thanos();
