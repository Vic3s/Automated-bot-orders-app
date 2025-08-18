import type { CartItemType  } from "../Types/Types";
import { CreateCartObject, DeleteCartObjectItem } from "./CartLocalStorage";

export const DecreaseQuantity = (product: CartItemType) => {
    const cartProducts = localStorage.getItem("cartProducts");
    
    const productId = product.id.toString();

    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)

        cartObject[productId].quantity -= 1;
        localStorage.setItem("cartProducts", JSON.stringify(cartObject));

        if(cartObject[productId].quantity == 0){
            DeleteCartObjectItem(productId, cartObject)
        }
    } 
}
export const IncreaseQuantity = (product: CartItemType) => {
    const cartProducts = localStorage.getItem("cartProducts");

    const productId = product.id.toString();

    console.log(product.availableQuantity);

    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        if(cartObject[productId].quantity < product.availableQuantity){
            cartObject[productId].quantity += 1;
        }
        localStorage.setItem("cartProducts", JSON.stringify(cartObject));
    }
}


export const QuantitySelectFunctionality = (productId: string) => {
    const cartProducts = localStorage.getItem("cartProducts");
    
    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)

        if(Object.keys(cartObject).includes(productId)){
            return cartObject[productId].quantity;
        }else{
            return 0;
        }

    }else{
        return "Error: Something went wrong"
    }
}


