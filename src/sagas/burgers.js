import { put, takeEvery } from 'redux-saga/effects'
import { staticBurger } from '../temp/data'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* loadBurgers() {
    yield delay(4000)
    yield put({ type: 'ADD_BURGER', payload: staticBurger })
}

export default function* burgersSaga() {
    yield takeEvery('LOAD_BURGERS', loadBurgers)
}