import { Action, ActionCreator } from 'redux'

export const GET_THREAD_LIST = 'GET_THREAD_LIST'

export interface GetThreadList extends Action {
  type: 'GET_THREAD_LIST',
  payload: {}
}

export const getThreadList: ActionCreator<GetThreadList> = () => ({
  type: GET_THREAD_LIST,
  payload: {}
})

export type ThreadListActions = GetThreadList