export type ProductType = {
        id: number,
        name: string,
        price: number,
        quantity: number,
        location: Array<number>
}

export type CartItemType = {
        id: number,
        name: string,
        price: number,
        quantity: number,
        location: Array<number>,
        availableQuantity: number
}

export type OrderProductType = {
        id: number,
        name: string,
        price: number,
        quantity: number,
}

export type AccoutnType = {
        username: string,
        email: string,
        address: string
}

export type OrderType = {
        orderNumber: number,
        accountName: number,
        visitedLocations: Array<Array<number>>,
        products: Array<OrderProductType>,
        total: number
}

export type CartObjectType = {
        [productId: string]: {
                price: number,
                quantity: number
        }
}

export type CartItemQuantityNPrice = {
        quantity: number,
        price: number;
}