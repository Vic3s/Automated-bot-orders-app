export type ObjectType = {
        id: number,
        name: string,
        price: number,
        quantity: number,
}

export type AccoutnType = {
        name: string,
        email: string,
        address: string
}

export type OrderType = {
        id: number,
        accountOrder: number,
        visitedLocations: Array<Array<number>>,
        products: Array<any>,
        total: number
}  
export type OrederProductType = {
        id: number,
        name: string,
        price: number,
        quantity: number
}     