interface MeetupData {
    id: number,
    thumbnail: any,
    title: string,
    desc: string
}

interface MeetupCardType {
    data: MeetupData
}

export type {
    MeetupCardType
}
