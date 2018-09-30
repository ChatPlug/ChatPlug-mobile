import { Reducer, AnyAction } from 'redux'
import Thread from '../types/Thread'

import { GET_THREAD_LIST, GET_THREAD_LIST_SUCCESS, ThreadListActions, GET_THREAD_LIST_FAIL } from '../actions/threadListActions'

export interface ThreadListState {
  readonly threadList: Thread[]
}

const defaultState: ThreadListState = {
  threadList: []
}

export const threadListReducer: Reducer<ThreadListState, ThreadListActions> = (state = defaultState, action: ThreadListActions) => {
  switch (action.type) {
    case GET_THREAD_LIST_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        threadList: []
      }
    }

    case GET_THREAD_LIST_FAIL: {
      console.log(action.payload)
      return {
        ...state,
        threadList: []
      }
    }
    default:
      return state
  }
}