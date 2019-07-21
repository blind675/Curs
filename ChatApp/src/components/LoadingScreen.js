import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class LoadingScreen extends Component {
    componentDidMount() {
        this.props.getUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.channels) {
            this.props.navigation.navigate('Main');
        } else if (nextProps.user) {
            // we have a user
            if (nextProps.user.email) {
                this.props.getChannels();
            } else {
                this.props.navigation.navigate('Login');
            }
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
        channels: state.channels,
        user: state.user
    };
};

export default connect(mapStateToProps, actions)(LoadingScreen);