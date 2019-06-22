import { put, takeEvery } from 'redux-saga/effects'

function* loadBurgers() {
    alert('oi')
  yield put({ type: 'ADD_BURGER' })
}

export default function* burgersSaga() {
  yield takeEvery('LOAD_BURGERS', loadBurgers)
}