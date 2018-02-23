

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardSection from './common/CardSection';

class ContactInfo extends Component {

    render() {
        return (
            <View>
            <CardSection style={{ borderBottomWidth: 0 }}>
            <Text style={styles.InfoTitleStyles}> Email: </Text>
            <Text> { this.props.contact.email } </Text>
            </CardSection>
            <CardSection>
            <Text style={styles.InfoTitleStyles}> Gender: </Text>
            <Text> { this.props.contact.gender } </Text>
            </CardSection>
            </View>
    );
    }
}

const styles = {
    InfoTitleStyles: {
        fontWeight: 'bold'
    }
};

// How to pop view ?
// import { Actions } from 'react-native-router-flux';
// Actions.pop();

export default ContactInfo;
