
interface MemberData {
    "id":number,
    "category": string,
    "account": string,
    "online_status": string,
    "thumbnail": any,
    "color": string
}

interface MemberCardType {
    data: MemberData
}

export type {
    MemberCardType
}
