import { all } from 'redux-saga/effects'
//sagas
import burgersSaga from '../sagas/burgers'

export default function* rootSaga() {
    yield all([
        burgersSaga(),
    ])
}
