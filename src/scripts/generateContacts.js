import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
for (let i = 0; i < number; i += 1) {
   createFakeContact();
}
    
};

const contacts = await generateContacts(5);
 
await PATH_DB.push(contacts);

// PATH_DB.length === 0?
//     PATH_DB.push(contacts): PATH_DB.push(...contacts);