import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
//sagas
import rootSaga from '../sagas/root-saga'

//reducers
import burgers from '../reducers/burgers'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ burgers })

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store;