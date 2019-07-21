import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import * as actions from '../actions';

class LoadingScreen extends Component {
    componentDidMount() {
        // TODO: read user from user defaults
        // if any get channels 
        // if none go to login
        this.props.navigation.navigate('Login');
        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.channels) {
            this.props.navigation.navigate('Main');
        }
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            />);
    }
}

const mapStateToProps = state => {
    return {
        channels: state.channels
    };
};

export default connect(mapStateToProps, actions)(LoadingScreen);