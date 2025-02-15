


export type MessageType = {
    author: string;
    message: string;
}

export type FullMessageType = MessageType & {
    id: number
}