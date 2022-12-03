interface Identity {
    "age" : number,
    "race" : string,
    "language" : string,
    "height" : string,
    "sexual" : string,
    "meetups": string,
    "responsive": string
}

interface AboutSectionType {
    data: Identity
}

export type {
    AboutSectionType
}
