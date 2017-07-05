import { combineReducers } from 'redux';
import BooksReducer from './ruducer_books'

const rootReducer = combineReducers({
    book: BooksReducer
});

export default rootReducer;
