import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { Main } from 'styles'

const ContactsDetailsOverview = ({contact}) => {
    const name = contact.name.split(" ")
    const firstName = name.shift()
    const lastName = name.join(" ")
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.firstName}>{firstName} </Text>
                <Text style={styles.lastName}>{lastName}</Text>
            </View>
            <Text style={styles.aboutMe}>About me</Text>
            <Text style={styles.profile}>{contact.profile}</Text>
        </View>
    )
}

export default ContactsDetailsOverview

const styles = StyleSheet.create({
    container: {
        ...Main.container
    },
    nameContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    name: {
        
    },
    firstName: {
        fontSize: 25,
        fontWeight: '600'
    },
    lastName: {
        fontSize: 25,
    },
    aboutMe: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10
    },
    profile: {
        fontSize: 16,
        fontWeight: '300',
    }
})