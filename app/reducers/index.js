/**
 * Created by KyleRuan on 2017/5/6.
 */
import { combineReducers } from 'redux';
import items from './items';
import editor from './editor';

const rootReducer = combineReducers({
  items,
  editor
});

export default rootReducer;
