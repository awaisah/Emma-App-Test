import React, {useEffect, useState} from 'react';
import {
    View,
    Text
} from 'react-native';
import { ContactsProfilePicture } from 'components';

const ContactsProfileCarousel = () => {
    return (
        <View>
            <Text>Carousel</Text>
            <ContactsProfilePicture />
        </View>
    )
}

export default ContactsProfileCarousel