import { combineReducers } from 'redux'

import { ThreadListState, threadListReducer } from './threadListReducer'
import { MessagesState, messagesReducer } from './messagesReducer'

export interface RootState {
  threadList: ThreadListState
  messages: MessagesState
}

export const rootReducer = combineReducers<RootState | undefined>({
  threadList: threadListReducer,
  messages: messagesReducer
})
