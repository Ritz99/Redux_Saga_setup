import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../Services/API"
import * as actions from "../Action/action";

function* processActionTest(data){
    console.log(data,"comnsaga")
}


function* commonSaga() {
    yield takeEvery(
        actions.ACTION_TEST,
        processActionTest
      );
}


export default commonSaga;