export const GET_THREADS = 'threads/LOAD'
export const GET_THREADS_SUCCESS = 'threads/LOAD_SUCCESS'
export const GET_THREADS_FAIL = 'threads/LOAD_FAIL'

export default function reducer(state = { threads: [] }, action) {
  switch (action.type) {
    case GET_THREADS:
      return { ...state, loading: true }
    case GET_THREADS:
      return { ...state, loading: false, threads: action.payload.data }
    case GET_THREADS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching threads'
      };
    default:
      return state;
  }
}

export function listThreads(port) {
  return {
    type: GET_THREADS,
    payload: {
      request: {
        url: `:${port}/api/v1/connections`
      }
    }
  };
}