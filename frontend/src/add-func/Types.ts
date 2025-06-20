export type ObjectType = {
        id: string,
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
        id: string,
        number: number,
        visitedLocations: Array<Array<number>>,
        products: Array<any>,
        total: number
}  
export type OrederProductType = {
        id: string,
        name: string,
        price: number,
        quantity: number
}     