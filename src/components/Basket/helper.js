import { list1, selectItem, removeItem } from './constants';

const getList = (state, listName) => {
  return listName === list1 ? [...state.list1] : [...state.list2];
}

const getListIds = (state, listName) => {
  return listName === list1 ? [...state.checkboxIdsForList1] : [...state.checkboxIdsForList2];
}

const getItemForId = (id, list) => {
  const filteredItem = list.find(item => item.id === id);
  return filteredItem;
}

const getInputValue = (state, listName) => {
  return listName === list1 ? state.list1AddValue : state.list2AddValue;
}

export const getTransferList = (state, listName) => {
  const listIds = getListIds(state, listName);
  const list = getList(state, listName);
  const listItems = listIds.map(id => getItemForId(id, list));
  return listItems;
}

export const getListData = (ownProps, list1Data, list2Data) => {
  return ownProps.list === list1 ? list1Data : list2Data;
}

export const getAddItemValue = (ownProps, list1AddValue, list2AddValue) => {
  return ownProps.list === list1 ? list1AddValue : list2AddValue;
}

export const getFilterList = (state, listName) => {
  const list = getList(state, listName);
  const listIds = getListIds(state, listName);
  const arrayList = [...list];
  listIds.forEach((id) => {
    const index = arrayList.findIndex(item => item.id === id);
    arrayList.splice(index, 1);
  })
  return arrayList;
}

export const getNewItem = (state, listName) => {
  const id = (new Date().getUTCMilliseconds() + new Date().getTime());
  const value = getInputValue(state, listName);
  return {
    id,
    value
  }
}

export const getFilterListAfterDeleteOperation = (state, listName, id) => {
  const list = getList(state, listName);
  const filteredList = list.filter(val => val.id !== id);
  return filteredList;
}

export const checkWithCheckboxIdForList = (state, listName, id, operation) => {
  const listIds = getListIds(state, listName);
  const index = listIds.indexOf(id);
  if(index > -1) {
    return listIds.filter(listId => listId !== id);
  } else if(operation === selectItem) {
    return [...listIds, id];
  } else if(operation === removeItem) {
    return [...listIds];
  }
}