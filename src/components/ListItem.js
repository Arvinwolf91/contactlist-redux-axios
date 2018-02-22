
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import CardSection from './common/CardSection';

class ListItem extends Component {

    onRowPress() {
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
