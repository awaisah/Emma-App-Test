import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { getContacts } from 'utils/contacts/Contacts'
import { ContactsProfileCarousel, ContactsDetailsList } from 'components'
import { Main } from 'styles'

const ContactListScene = () => {
    const [contacts, setContacts] = useState([])
    const [currentContact, setCurrentContact] = useState(0)

    useEffect(async () => {
        const _contacts = await getContacts()
        setContacts(_contacts)
    })

    const scrollTo = (index) => {
        setCurrentContact(index)
    }

    return (
        <View style={styles.container}>
            <ContactsProfileCarousel contacts={contacts} scrollTo={scrollTo.bind(this)} />
            <ContactsDetailsList contacts={contacts} currentContact={currentContact} />
        </View>
    )
}

export default ContactListScene

const styles = StyleSheet.create({
    container: {
        ...Main.container
    }
})