import { Reducer } from 'redux'
import Thread from '../types/Thread'

import { GET_THREAD_LIST, ThreadListActions } from '../actions/threadListActions'

export interface ThreadListState {
  readonly threadList: Thread[]
}

const defaultState: ThreadListState = {
  threadList: []
}

// @ts-ignore
export const threadListReducer: Reducer<ThreadListState> = (state = defaultState, action: ThreadListActions) => {
  switch (action.type) {
    case GET_THREAD_LIST: {
      return {
        ...state,
        threadList: []
      }
    }
    default:
      return state
  }
}