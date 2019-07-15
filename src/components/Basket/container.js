import { connect } from 'react-redux';
import Basket from './Basket.Index.js';
import { getListData, getAddItemValue } from './helper';
import { loadList, handleChangeEvent, handleClickEvent } from './actions';

const mapStateToProps = (state, ownProps) => {
  const { list1, list2, list1AddValue, list2AddValue } = state.listData;
  
  return {
    listData: getListData(ownProps, list1, list2),
    addItemValue: getAddItemValue(ownProps, list1AddValue, list2AddValue)
  }
}
const mapDispatchToProps = dispatch => ({
  onLoadList: () => dispatch(loadList()),
  onHandleChangeEvent: (...args) => dispatch(handleChangeEvent(...args)),
  onHandleClickEvent: (...args) => dispatch(handleClickEvent(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);