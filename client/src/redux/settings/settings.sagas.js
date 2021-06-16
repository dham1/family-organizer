// import { all, call, takeLatest, put, select } from 'redux-saga/effects';

// import { getUserOrderRef } from '../../firebase/firebase.utils';
// import { selectCurrentUser } from '../user/user.selectors';
// import { addOrder } from './settings.actions';
// import { selectOrders } from './settings.selector';

// export function* addOrderToFirebase() {
//   const currentUser = yield select(selectCurrentUser);

//   if (currentUser) {
//     try {
//       const orderRef = yield getUserOrderRef(currentUser.id);
//       const orderSnapshot = yield orderRef.get();
//       yield put(addOrder(orderSnapshot.data().order));

//     } catch (err) {
//       console.log(err);

//     }
//   }

// }


// export function* settingsSagas() {
//   yield all([call(addOrderToFirebase)]);
// }