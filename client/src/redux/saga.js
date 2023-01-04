import {call, put, takeEvery} from 'redux-saga/effects'
import { fetchdata } from './reducer'

function* getdata(){
    const data = yield call(()=> fetch('/api'));
    const dataformat = yield data.json()
    yield put(fetchdata(dataformat))
}

function* datasaga(){
    yield takeEvery('computedata/fetchdata',getdata)
} 

export default datasaga;