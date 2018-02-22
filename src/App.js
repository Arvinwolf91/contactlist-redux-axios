/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'; // communication glue between react with redux
import { createStore, applyMiddleware } from 'redux'; // holds state
import ReduxThunk from 'redux-thunk'; // middleware
import reducers from './reducers';   
import Router from './Router';

class App extends Component {

    componentWillMount() {
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
        <Provider store={store}>
        <Router />
        </Provider>
        );
    }
}

export default App;
