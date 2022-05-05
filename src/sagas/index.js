import { all } from "redux-saga/effects";
import ProductSaga from "./product";
import CategoriesSaga from "./categories";
// import BannerSaga from "./banner";

export default function* rootSaga() {
  yield all([
    ProductSaga(),
    CategoriesSaga
    // BannerSaga(),
  ]);
}
