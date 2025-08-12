import type { ObjectType, OrederProductType } from "../Types/Types";

export const DecreaseQuantity = (product: ObjectType) => {
    const cartProducts = localStorage.getItem("cartProducts");
    
    const productId = product.id.toString();

    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        if(cartObject[productId].quantity > 1){
            cartObject[productId].quantity -= 1;
            localStorage.setItem("cartProducts", JSON.stringify(cartObject));
        }
    } 
}
export const IncreaseQuantity = (product: ObjectType) => {
    const cartProducts = localStorage.getItem("cartProducts");

    const productId = product.id.toString();

    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        if(cartObject[productId].quantity < product.quantity){
            cartObject[productId].quantity += 1;
        }
        localStorage.setItem("cartProducts", JSON.stringify(cartObject));
    }
} 

export const QuantitySelectFunctionality = (productId: string) => {
    const cartProducts = localStorage.getItem("cartProducts");
    
    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        return cartObject[productId].quantity;

    }else{
        return "Error: Something went wrong"
    }
}


