import { Reducer, AnyAction } from 'redux'
import Thread from '../types/Thread'

import { GET_THREAD_LIST, GET_THREAD_LIST_SUCCESS, ThreadListActions, GET_THREAD_LIST_FAIL } from '../actions/threadListActions'

export interface ThreadListState {
  readonly threadList: Thread[]
}

const defaultState: ThreadListState = {
  threadList: [],
}

export const threadListReducer: Reducer<ThreadListState, ThreadListActions> = (state = defaultState, action: ThreadListActions) => {
  switch (action.type) {
    case GET_THREAD_LIST_SUCCESS: {
      return {
        ...state,
        threadList: (action.payload as any).data.data
      }
    }

    case GET_THREAD_LIST_FAIL: {
      return {
        ...state,
        threadList: (action.payload as any).data.data
      }
    }
    default:
      return state
  }
}