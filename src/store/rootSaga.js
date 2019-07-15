import { fork, all } from "redux-saga/effects";
import basketSaga from "../components/Basket/sagas";

function* rootSaga() {
  yield all([fork(basketSaga)]);
}

export default rootSaga;
