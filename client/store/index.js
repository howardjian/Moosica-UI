import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';
import rootSaga from '../sagas';

const initialState = {

    'appState': {},

    // Currently Playing
    'current': {},

    // Downloaded Music Data
    'downloadedMusic': {},

    // Music Queue
    'musicQueued': [],

    // User Playlists, sorted alphabetically
    'playlists': [],

    // User Preferences
    'preferences': {},

    // User Related Data
    'user': {},

};

export default () => {
    const history = createBrowserHistory();
    
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [ routerMiddleware(history), sagaMiddleware, logger ];

    const store = createStore(
        connectRouter(history)(combineReducers({ ...reducers })),
        initialState,
        compose(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}