import { types } from './constants';

export const loadList = () => {
  return {
    type: types.LOAD_LIST
  }
}

export const itemCheckboxEvent = (list, value) => {
  return {
    type: types.HANDLE_CHANGE_EVENT_FOR_ITEM_CHECKBOX,
    fromList: list,
    id: value
  }
}

export const addItemChangeEvent = (list, value) => {
  return {
    type: types.HANDLE_CHANGE_EVENT_FOR_ADD_ITEM,
    fromList: list,
    value
  }
}

export const itemDeleteEvent = (list, value) => {
  return {
    type: types.HANDLE_DELETE_ITEM_FOR_LIST,
    fromList: list,
    id: value
  }
}

export const itemAddEvent = (list, value) => {
  return {
    type: types.HANDLE_ADD_ITEM_FOR_LIST,
    fromList: list
  }
}


export const itemTransferEvent = (list, value) => {
  return {
    type: types.HANDLE_TRANSFER_ITEM_FOR_LIST,
    fromList: list
  }
}