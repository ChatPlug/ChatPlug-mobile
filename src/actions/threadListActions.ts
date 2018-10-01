import { Action, ActionCreator } from 'redux'
import Thread from '../types/Thread'

export const GET_THREAD_LIST = 'GET_THREAD_LIST'
export const GET_THREAD_LIST_SUCCESS = 'GET_THREAD_LIST_SUCCESS'
export const GET_THREAD_LIST_FAIL = 'GET_THREAD_LIST_FAIL'

export interface GetThreadList extends Action {
  type: 'GET_THREAD_LIST',
    payload: {
      request: {
        url: '/connections' 
      }
    }
}

export interface GetThreadListSuccess extends Action {
  type: 'GET_THREAD_LIST_SUCCESS',
  payload: {
    data: {
      data: Thread[]
    }
  }
}

export interface GetThreadListFail extends Action {
  type: 'GET_THREAD_LIST_FAIL',
  payload: {}
}

export const getThreadList: ActionCreator<GetThreadList> = () => ({
  type: 'GET_THREAD_LIST',
    payload: {
      request: {
        url: '/connections' 
      }
    }
})

export type ThreadListActions = GetThreadList | GetThreadListFail | GetThreadListSuccess