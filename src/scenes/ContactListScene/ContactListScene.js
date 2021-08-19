import React, {useEffect, useState} from 'react';
import {
    View,
    Text
} from 'react-native';
import { getContacts } from 'utils/contacts/Contacts'
import { ContactsProfileCarousel, ContactsDetailsList } from 'components'

const ContactListScene = () => {
    const [contacts, setContacts] = useState([])

    useEffect(async () => {
        const _contacts = await getContacts()
        setContacts(_contacts)
    })

    return (
        <View>
            <Text>Contacts List Scene: {contacts.length}</Text>
            <ContactsProfileCarousel />
            <ContactsDetailsList />
        </View>
    )
}

export default ContactListScene