import { all } from "redux-saga/effects";
import getCommentWatcher from "./commentssaga";

function *rootsaga()
{

    yield all([getCommentWatcher()])
}

export default rootsaga