import { Reducer, AnyAction } from 'redux'
import Thread from '../types/Thread'

import Message from '../types/Message'
import { MessagesActions, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAIL } from '../actions/messagesActions';

export interface MessagesState {
  readonly messages: Message[]
}

const defaultState: MessagesState = {
  messages: [],
}

export const messagesReducer: Reducer<MessagesState, MessagesActions> = (state = defaultState, action: MessagesActions) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload.data.data
      }
    }

    case GET_MESSAGES_FAIL: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}