import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import adminUsers from './admin.reducer';
import adminItem from './adminItem.reducer'
import pubs from './pubs.reducer';
import markets from './markets.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  adminUsers,
  adminItem,
  pubs, // list of publications from database
  markets, // list of markets from database
});

export default rootReducer;
