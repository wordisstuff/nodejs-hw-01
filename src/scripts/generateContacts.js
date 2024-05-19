import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';


const generateContacts = async (number) => {
    
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');

        const contacts = JSON.parse(data) || [];

        for (let i = 0; i < number; i++) {
        const newContact = createFakeContact();
        contacts.push(newContact); 
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log("objects added successfully");
    } catch(error) {
            console.log(error);
        }
};

console.log(createFakeContact());
generateContacts(10);