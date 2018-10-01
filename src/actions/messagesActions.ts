import { Action, ActionCreator } from 'redux'
import Message from '../types/Message'

export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_EARLIER_MESSAGES = 'GET_EARLIER_MESSAGES'
export const GET_EARLIER_MESSAGES_SUCCESS = 'GET_EARLIER_MESSAGES_SUCCESS'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const GET_MESSAGES_FAIL = 'GET_MESSAGES_FAIL'

export interface GetMessages extends Action {
    type: 'GET_MESSAGES',
    payload: {
      request: {
        url: string
      }
    }
}

export interface GetEarlierMessages extends Action {
    type: 'GET_EARLIER_MESSAGES',
    payload: {
      request: {
        url: string
      }
    }
}

export interface GetMessagesSuccess extends Action {
  type: 'GET_MESSAGES_SUCCESS',
  payload: {
      data: {
          data: Message[]
      }
  }
}

export interface GetEarlierMessagessSuccess extends Action {
  type: 'GET_EARLIER_MESSAGES_SUCCESS',
  payload: {
    data: {
      data: Message[]
    }
  }
}
export interface GetMessagesFail extends Action {
  type: 'GET_MESSAGES_FAIL',
  payload: {}
}

export const getMessages: ActionCreator<GetMessages> = (payload: { connId: number }) => ({
  type: 'GET_MESSAGES',
    payload: {
      request: {
        url: `/connections/${payload.connId}/messages`
      }
    }
})

export const getEarlierMessages: ActionCreator<GetEarlierMessages> = (payload: { connId: number, after: number }) => ({
    type: 'GET_EARLIER_MESSAGES',
      payload: {
        request: {
          url: `/connections/${payload.connId}/messages?after=${payload.after}`
        }
      }
  })

export type MessagesActions = GetMessages | GetMessagesFail | GetMessagesSuccess | GetEarlierMessages | GetEarlierMessagessSuccess