// THIS FILE WILL CONTAIN THE FUNCTIONS WHICH WILL BE USED TO 
// READ THE JSON FILE AND RETREIVE ALL THE DATA AND IMAGES

import ProfilePictures from 'avatars'

export async function getContacts() {
    try {
        const data = require('assets/json/contacts.json')
        return(data);
    } catch (e) {
        console.error("" + e);
    }
}

export function getImage(contact) {
    const file = ProfilePictures[contact.name]

    return file
}