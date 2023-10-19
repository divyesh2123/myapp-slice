import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { errorfetch, fetchTodos, setTodos } from "../slice/commentslice";

const fetchGetUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  };
  
  



   function* getcommentsSaga(action) {
      try {
       
        const data = yield call(fetchGetUsers);
        console.log(data);
        yield put(setTodos(data));
      } catch (error) {
        yield put(errorfetch(error));
      }
    }
    
    export function* getCommentWatcher() {
      yield takeLeading(fetchTodos.type, getcommentsSaga);
    }
  
  export default getCommentWatcher;