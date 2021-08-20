import React, {useEffect, useRef, useState} from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';

import { Main } from 'styles'

import { ContactsDetailsOverview } from 'components'

const ContactsDetailsList = ({contacts, currentContact}) => {
    const [scrollViewHeight, setScrollViewHeight] = useState(0)

    const scrollView = useRef(null)

    let recentCurrentContact = -1

    useEffect(() => {
        if (recentCurrentContact === currentContact) { return }
        recentCurrentContact = currentContact
        scrollView.current?.scrollTo({y:scrollViewHeight*currentContact, animation: true})
    }, [currentContact, scrollViewHeight])

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollView}
                pagingEnabled
                scrollEnabled={false}
                contentContainerStyle={{height: (100*contacts.length)+'%'}}
                onLayout={(event) => {
                    var {height} = event.nativeEvent.layout;
                    setScrollViewHeight(height)
                }}
            >  
                {
                    contacts.map((contact) => {
                        return (
                            <ContactsDetailsOverview contact={contact} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ContactsDetailsList

const styles = StyleSheet.create({
    container: {
        ...Main.container,
        padding: 10
    }, 
    inner: {
        flex: 1
    }
})