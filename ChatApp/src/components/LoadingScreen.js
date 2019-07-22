import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class LoadingScreen extends Component {
    componentDidMount() {
        this.props.getUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user && nextProps.user.email) {
            this.props.navigation.navigate('Main');
        } else {
            this.props.navigation.navigate('Login');
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
        user: state.user
    };
};

export default connect(mapStateToProps, actions)(LoadingScreen);