import { call, put, takeLatest} from 'redux-saga/effects'
import { loadCollegesFail, loadCollegesSuccess } from "./actions";
import axios from "axios"

const loadAPI = async () =>  axios.get('http://universities.hipolabs.com/search?&country=India')

export function* onLoadCollegesStart () {
    try {
        const response = yield call(loadAPI);
        yield put(loadCollegesSuccess(response.data));
    }catch(error){
        yield put(loadCollegesFail(error))
    }
}

export function* onLoadColleges(){
    yield takeLatest('LOAD_COLLEGES_START', onLoadCollegesStart)
}