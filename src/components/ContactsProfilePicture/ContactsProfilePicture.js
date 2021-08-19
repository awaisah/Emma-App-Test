import React, {useEffect, useState} from 'react';
import {
    View,
    Text
} from 'react-native';
import { getContacts } from 'utils/contacts/Contacts'

const ContactsProfilePicture = () => {
    const [contacts, setContacts] = useState([])

    useEffect(async () => {
        const _contacts = await getContacts()
        setContacts(_contacts)
    })
    
    return (
        <View>
            <Text>Picture</Text>
        </View>
    )
}

export default ContactsProfilePicture