import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { Dispatch } from 'redux'
import ThreadList from '../components/ThreadConnectionsScreen/ThreadList'
import { getThreadList, GetThreadList } from '../actions/threadListActions';

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  threadList: state.threadList.threadList
})

const mapDispatchToProps = (dispatch: Dispatch<GetThreadList>) => ({
  getThreadList: () => dispatch(getThreadList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadList)