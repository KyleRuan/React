/**
 * Created by KyleRuan on 2017/5/6.
 */
import * as ActionTypes from '../actions';

const initialState = {
  selectedId: null,
  isEditing: false
};

export default function eidtor(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SELECT_ENTRY:
      return Object.assign({}, state, { selectedId: action.id });
    case ActionTypes.UPDATE_SAVED_ENTRY:
      return Object.assign({}, state, { selectedId: action.id, isEditing: false });
    case ActionTypes.CREATE_NEW_ENTRY:
      return Object.assign({}, state, { selectedId: null, isEditing: true });
    case ActionTypes.EDIT_ENTRY:
      return Object.assign({}, state, { selectedId: action.id, isEditing: true });
    case ActionTypes.CANCEL_EDIT:
      return Object.assign({}, state, { isEditing: false });
    default:
      return state;
  }
}
