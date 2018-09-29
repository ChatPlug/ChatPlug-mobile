export const GET_THREADS = 'chatplug/threads/LOAD'
export const GET_THEADS_SUCCESS = 'chatplug/threads/SUCCESS'
export const GET_THREADS_FAIL = 'chatplug/threads/LOAD_FAIL'


export default function reducer(state = { threads: [] }, action) {
    switch(action.type) {
        case GET_THREADS:
            return { ...state,  loading: true}
        case GET_THREADS_FAIL:
            return {
                ...state,
                loading: false,
                error: 'There is no threads'
            }
        default:
            return state
    }
}

export function threadsList(chatplug) {
    return {
        type: GET_THREADS,
        payload: {
            request: {
                url: `${chatplug}/api/v1/connections`
            }
        }
    }
}