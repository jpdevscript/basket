import { list1, list2 } from './constants';
const Immutable = require("seamless-immutable").static;

export const mergeStateForSetCheckboxIdsForList = (state, fromList, listIds) => {
  if (fromList === list1) {
    return Immutable.merge (state, {checkboxIdsForList1: listIds});
  } else if (fromList === list2) {
    return Immutable.merge (state, {checkboxIdsForList2: listIds});
  }
}

export const mergeStateForCaptureAddInputChanges = (state, fromList, value) => {
  if (fromList === list1) {
    return Immutable.merge (state, {list1AddValue: value});
  } else if (fromList === list2) {
    return Immutable.merge (state, {list2AddValue: value});
  }
}

export const mergeStateForMoveItemsToList = (state, fromList, transferedList, filteredList) => {
  if (fromList === list1) {
    return Immutable.merge (state, {list1: [...filteredList], list2: [...state.list2, ...transferedList], checkboxIdsForList1:[]});
  } else if (fromList === list2) {
    return Immutable.merge (state, {list1: [...state.list1, ...transferedList], list2: [...filteredList], checkboxIdsForList2:[]});
  }
}

export const mergeStateForAddItemIntoList = (state, fromList, newItem) => {
  if (fromList === list1) {
    return Immutable.merge (state, {list1: [...state.list1, newItem], list1AddValue: ''});
  } else if (fromList === list2) {
    return Immutable.merge (state, {list2: [...state.list2, newItem], list2AddValue: ''});
  }
}

export const mergeStateForRemoveItemFromList = (state, fromList, filteredList, listIds) => {
  if (fromList === list1) {
    return Immutable.merge (state, {list1: filteredList, checkboxIdsForList1: listIds});
  } else if (fromList === list2) {
    return Immutable.merge (state, {list2: filteredList, checkboxIdsForList2: listIds});
  }
}