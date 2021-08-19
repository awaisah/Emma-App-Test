// THIS FILE WILL CONTAIN THE FUNCTIONS WHICH WILL BE USED TO 
// READ THE JSON FILE AND RETREIVE ALL THE DATA AND IMAGES

export async function getContacts() {
    try {
        const data = require('assets/json/contacts.json')
        return(data);
    } catch (e) {
        console.error("" + e);
    }
}