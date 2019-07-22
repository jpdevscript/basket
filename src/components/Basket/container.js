import { connect } from 'react-redux';
import Basket from './Basket.Index.js';
import { getListData, getAddItemValue } from './helper';
import { loadList, itemCheckboxEvent, itemDeleteEvent, addItemChangeEvent, itemAddEvent, itemTransferEvent } from './actions';

const mapStateToProps = (state, ownProps) => {
  const { list1, list2, list1AddValue, list2AddValue } = state.listData;

  return {
    listData: getListData(ownProps, list1, list2),
    addItemValue: getAddItemValue(ownProps, list1AddValue, list2AddValue)
  }
}
const mapDispatchToProps = dispatch => ({
  onLoadList: () => dispatch(loadList()),
  onItemCheckboxEvent: (...args) => dispatch(itemCheckboxEvent(...args)),
  onChangeAddItemEvent: (...args) => dispatch(addItemChangeEvent(...args)),
  onItemDeleteEvent: (...args) => dispatch(itemDeleteEvent(...args)),
  onItemAddEvent: (...args) => dispatch(itemAddEvent(...args)),
  onItemTransferEvent: (...args) => dispatch(itemTransferEvent(...args)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);