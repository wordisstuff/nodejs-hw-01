import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import path from 'path';


const generateContacts = async (number) => {
    const file = path.resolve(PATH_DB);
    
    try {
        const data = await fs.readFile(file, 'utf-8');

        const contacts = JSON.parse(data) || [];

        for (let i = 0; i < number; i++) {
        const newContact = createFakeContact();
        contacts.push(newContact); 
        }

        await fs.writeFile(file, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log("objects added successfully");
    } catch(error) {
            console.log(error);
        }
};

console.log(createFakeContact());
generateContacts(10);