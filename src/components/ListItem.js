
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardSection from './common/CardSection';

class ListItem extends Component {

    onRowPress() {
        // navigate using scene key in router.js
        Actions.contactInfo({ contact: this.props.contact });
        // change navigation bar title in ContactInfo 
        Actions.refresh({ key: 'contactInfo', title: this.props.contact.name });
    }

    render() {
        const { name } = this.props.contact;

        return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
         <CardSection>
             <Text style={styles.textStyle}> { name } </Text>
        </CardSection>
        </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
