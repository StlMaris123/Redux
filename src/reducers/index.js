import { combineReducers } from 'redux';
import BooksReducer from './ruducer_books';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;
