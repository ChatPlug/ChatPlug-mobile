import { combineReducers } from 'redux'

import { ThreadListState, threadListReducer } from './threadListReducer'

export interface RootState {
  threadList: ThreadListState
}

export const rootReducer = combineReducers<RootState | undefined>({
  threadList: threadListReducer
})
