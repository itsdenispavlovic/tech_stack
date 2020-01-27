import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    // helper method instead adding a function
    renderItem(item) {
        return <ListItem library={item} />
    }
    
    render() {

        return (
            <FlatList 
                data={this.props.libraries}
                keyExtractor={library => library.id.toString()}
                renderItem={this.renderItem}
            />
        );
        ;
    }
    
}

export const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);