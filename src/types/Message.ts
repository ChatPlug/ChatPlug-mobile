import User from './User';

export default interface Message {
    id: number
    content: string
    createdAt: Date
    originExternalThreadId: string
    author: User
}