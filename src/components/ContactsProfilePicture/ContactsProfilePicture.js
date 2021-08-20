import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { Buttons } from 'styles'

import { getImage } from 'utils/contacts/Contacts'
import { Colors } from 'styles';

const ContactsProfilePicture = ({contact, current}) => {    
    return (
        <>
            {
                current ?
                <Image source={getImage(contact)} style={styles.imageSelected} /> :
                <Image source={getImage(contact)} style={styles.image} />
            }
            
        </>
    )
}

export default ContactsProfilePicture

const styles = StyleSheet.create({
    image: {
        height: Buttons.profilePictureWidth,
        width: Buttons.profilePictureWidth,
        marginVertical: Buttons.profilePictureMarginVertical,
        marginHorizontal: Buttons.profilePictureMarginHorizonal
    },
    imageSelected: {
        height: Buttons.profilePictureWidth,
        width: Buttons.profilePictureWidth,
        marginVertical: Buttons.profilePictureMarginVertical,
        marginHorizontal: Buttons.profilePictureMarginHorizonal,
        borderColor: Colors.selectedColor,
        borderWidth: 5,
        borderRadius: 40
    }
})