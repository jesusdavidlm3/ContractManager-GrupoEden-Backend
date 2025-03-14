export interface basicInfo{
    id: number,
    name: string
}

export interface userInfo{
    id: string,
    password: string,
    name: string,
    lastName: string,
    active: boolean
}

export interface listItemContract{
    contractId: string,
    contractNumber: string,
    clientName: string,
    clientLastname: string
}