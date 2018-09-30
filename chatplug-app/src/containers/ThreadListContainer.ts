import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { Dispatch } from 'redux'
import ThreadList from '../Components/ThreadConnectionsScreen/threadlist'
import { getThreadList, GetThreadList } from '../actions/threadListActions';

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  threadList: state.threadList.threadList
})

const mapDispatchToProps = (dispatch: Dispatch<GetThreadList>) => ({
  getThreadList: guildId => dispatch(getThreadList(guildId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadList)