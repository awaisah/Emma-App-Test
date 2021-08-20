import React, {useRef, useState} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { ContactsProfilePicture } from 'components';
import { Main, Buttons } from 'styles';

const windowWidth = Dimensions.get('window').width;
const interval = (Buttons.profilePictureMarginHorizonal * 2) + Buttons.profilePictureWidth

const ContactsProfileCarousel = ({contacts, scrollTo}) => {
    const [current, setCurrent] = useState(0)
    const [userScrolled, setUserScrolled] = useState(false)
    const scrollView = useRef(null)

    const contactsProfilePictures = 
        contacts.map((contact, index) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        setUserScrolled(false)
                        scrollView.current?.scrollTo({x: index*interval, animation: true})
                        setCurrent(index)
                        scrollTo(index)
                    }}
                >
                    <ContactsProfilePicture key={contact.name} contact={contact} current={current === index} />
                </TouchableOpacity>
            )
        })

    const handleScroll = (event) => {
        // Check if its the user that scrolled to avoid detecting changes while moving
        if (!userScrolled) { return }
        const current = Math.round(event.nativeEvent.contentOffset.x / interval)
        setCurrent(current)
        scrollTo(current)
    }

    const handleTouch = (_) => {
        setUserScrolled(true)
    }
    

    return (
        <ScrollView 
            ref={scrollView}
            style={styles.container}
            horizontal={true}
            contentContainerStyle={{ paddingHorizontal: (windowWidth / 2) - (interval / 2), height: 120 }}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToInterval={interval}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            onTouchStart={handleTouch}
        >
            { contactsProfilePictures }
        </ScrollView>
    )
}

export default ContactsProfileCarousel

const styles = StyleSheet.create({
    container: {
        ...Main.container,
        maxHeight: 120
    },
})