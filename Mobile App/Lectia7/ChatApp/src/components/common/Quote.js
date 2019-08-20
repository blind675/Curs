import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { PacmanIndicator } from 'react-native-indicators';


class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            hasData: false
        }

    }

    componentDidMount() {
        setTimeout(() => {
            fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
                .then((response) => {
                    return response.json();
                })
                .then((responseJson) => {
                    const quoteObject = responseJson[0];
                    this.setState({
                        quote: quoteObject.content,
                        author: quoteObject.title,
                        hasData: true
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }, 2000);
    }

    renderQuote() {
        if (this.state.hasData === true) {
            return (
                <WebView
                    source={{ html: `<h2>${this.state.quote}</h2>` }}
                />);
        }

        return <PacmanIndicator />
    }

    render() {
        return (
            <View
                style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                }}>
                {this.renderQuote()}
            </View>
        );
    }
}

export default Quote;
