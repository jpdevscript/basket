import createReducer from "../../utils/createReducer";
import { types, removeItem, selectItem } from './constants';
import {
  getFilterList,
  getTransferList,
  getNewItem,
  getFilterListAfterDeleteOperation,
  checkWithCheckboxIdForList
} from './helper';
import {
  mergeStateForSetCheckboxIdsForList,
  mergeStateForCaptureAddInputChanges,
  mergeStateForMoveItemsToList,
  mergeStateForAddItemIntoList,
  mergeStateForRemoveItemFromList
} from './reducerHelper';

const Immutable = require("seamless-immutable").static;

const initialState = Immutable.from({
  list1: [],
  list2: [],
  checkboxIdsForList1: [],
  checkboxIdsForList2: [],
  list1AddValue: '',
  list2AddValue: ''
});

const setListData = (state, { data }) => {
  return Immutable.merge(state, { list1: [...data.lists.list1], list2: [...data.lists.list2] });
}

const setCheckboxIdsForList = (state, { fromList, id }) => {
  const listIds = checkWithCheckboxIdForList(state, fromList, parseInt(id), selectItem);

  return mergeStateForSetCheckboxIdsForList(state, fromList, listIds);
}

const captureAddInputChanges = (state, { fromList, value }) => {
  return mergeStateForCaptureAddInputChanges(state, fromList, value);
}

const moveItemsToList = (state, { fromList }) => {
  const transferedList = getTransferList(state, fromList);
  const filteredList = getFilterList(state, fromList);

  return mergeStateForMoveItemsToList(state, fromList, transferedList, filteredList);
}

const addItemIntoList = (state, { fromList }) => {
  const newItem = getNewItem(state, fromList);
  if (!newItem.value.trim()) {
    return state;
  }

  return mergeStateForAddItemIntoList(state, fromList, newItem);
}

const removeItemFromList = (state, { fromList, id }) => {
  const filteredList = getFilterListAfterDeleteOperation(state, fromList, parseInt(id));
  const listIds = checkWithCheckboxIdForList(state, fromList, parseInt(id), removeItem);

  return mergeStateForRemoveItemFromList(state, fromList, filteredList, listIds);
}

const handlers = {
  [types.RECEIVED_LIST_DATA]: setListData,
  [types.HANDLE_CHANGE_EVENT_FOR_ITEM_CHECKBOX]: setCheckboxIdsForList,
  [types.HANDLE_CHANGE_EVENT_FOR_ADD_ITEM]: captureAddInputChanges,
  [types.HANDLE_TRANSFER_ITEM_FOR_LIST]: moveItemsToList,
  [types.HANDLE_ADD_ITEM_FOR_LIST]: addItemIntoList,
  [types.HANDLE_DELETE_ITEM_FOR_LIST]: removeItemFromList,
}

export default createReducer(initialState, handlers);