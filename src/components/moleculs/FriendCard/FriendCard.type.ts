
interface FriendData {
    "id":number,
    "account":string,
    "thumbnail":any,
    "bio":string
}

interface FriendCardType {
    data: FriendData
}

export type {
    FriendCardType
}
