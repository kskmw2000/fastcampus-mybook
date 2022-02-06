import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { booksSaga } from './books';

export default function* rootSage() {
  yield all([authSaga(), booksSaga()]);
}
