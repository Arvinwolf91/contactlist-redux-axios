

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ContactInfo extends Component {

    render() {
        return (
            <View>
            <Text> { this.props.contact.email } </Text>
            </View>
    );
    }
}

// How to pop view ?
// import { Actions } from 'react-native-router-flux';
// Actions.pop();

export default ContactInfo;
