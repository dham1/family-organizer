import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import ContactPage from './pages/contact/contact.component';
import OrderConfirmation from './pages/order-confirmation/order-confirmation.component';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/checkout/order' render={(props) => <OrderConfirmation {...props} />} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </ErrorBoundary>
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



//OBSERVABLE PATTERN -> 
//Avem o lista de evenimente, 
//atunci cand se intampla un anumit event observatorul va face ceva( in cazul asta va lua datele si le va actualiza)
//with this style we get new data live
// componentDidMount() {
//   const { setCurrentUser } = this.props;

//   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth);

//       userRef.onSnapshot(snapShot => {
//         setCurrentUser({
//           id: snapShot.id,
//           ...snapShot.data()
//         });
//       });
//     }

//     setCurrentUser(userAuth);
//    });
// }

// componentWillUnmount() {
//   this.unsubscribeFromAuth();
// }


//PROMISE PATTERN style (makes api call to fetch back the data associated to this collection)
  //with this style we get new data only when mount again

// componentDidMount() {
//   const { updateCollections } = this.props;
//   const collectionRef = firestore.collection('collections');
//   collectionRef.get().then((snapshot) => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     updateCollections(collectionsMap);

//     this.setState({ loading: false });
//   });
// }

