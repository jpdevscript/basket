import { types, checkbox, addItem, transferButton, addItemButton, deleteButton } from './constants';

export const loadList = () => {
  return {
    type: types.LOAD_LIST
  }
}

export const handleChangeEvent = (list, value, inputType) => {
  if (inputType === checkbox) {
    return {
      type: types.HANDLE_CHANGE_EVENT_FOR_ITEM_CHECKBOX,
      fromList: list,
      id: value
    }
  } else if (inputType === addItem) {
    return {
      type: types.HANDLE_CHANGE_EVENT_FOR_ADD_INPUT_TYPES,
      fromList: list,
      value
    }
  }
}

export const handleClickEvent = (list, value, inputType) => {
  if (inputType === transferButton) {
    return {
      type: types.CLICK_TRANSFER_BUTTON_FOR_LIST,
      fromList: list
    }
  } else if (inputType === addItemButton) {
    return {
      type: types.CLICK_ADD_BUTTON_INSERT_INTO_LIST,
      fromList: list
    }
  } else if (inputType === deleteButton) {
    return {
      type: types.CLICK_DELETE_BUTTON_FOR_ITEM,
      fromList: list,
      id: value
    }
  }
}