/**
 * Created by KyleRuan on 2017/5/6.
 */


// items 有哪些state
import { UPDATE_ENTRY_LIST } from '../actions';

const initialState = [];

export default function items(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ENTRY_LIST:
      return action.items;
    default:
      return state;
  }
}
