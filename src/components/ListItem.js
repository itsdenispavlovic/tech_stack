import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { 
    CardSection 
} from './common';
// In the actions file, you can have many actions creator, * stands for selecting all as actions, like foreach
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {

        const { library, expanded } = this.props;
        if(expanded)
        {
            return (
                <Text>{library.item.description}</Text>
                
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const {
            id,
            title
        } = this.props.library.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;


    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);