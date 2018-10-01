import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { Dispatch } from 'redux'
import ThreadList from '../components/ThreadConnectionsScreen/ThreadList'
import { getThreadList, GetThreadList } from '../actions/threadListActions'
import { GetMessages, getMessages } from '../actions/messagesActions'
import Messages from '../components/ChatScreen/Messages'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  messages: state.messages.messages
})

const mapDispatchToProps = (dispatch: Dispatch<GetMessages>) => ({
  getMessages: (payload: any) => dispatch(getMessages(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)