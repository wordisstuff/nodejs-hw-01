import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const file = path.resolve(PATH_DB);
    try {
    
    const data = await fs.readFile(file, 'utf-8');

    const contacts = JSON.parse(data) || [];

    const newContact = createFakeContact();
    
    contacts.push(newContact);

    await fs.writeFile(file, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log("object added successfully");
} catch(error) {
        console.log(error);
}
};

await addOneContact();
