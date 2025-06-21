import type { ObjectType } from "./Types";

export const DecreaseQuantity = (id: string) => {
    const cartProducts = sessionStorage.getItem("cartProducts");
    
    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        if(cartObject[id].quantity > 1){
            cartObject[id].quantity -= 1;
            sessionStorage.setItem("cartProducts", JSON.stringify(cartObject));
        }
    } 
}
export const IncreaseQuantity = (id: string) => {
    const cartProducts = sessionStorage.getItem("cartProducts");
    
    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        cartObject[id].quantity += 1;
        sessionStorage.setItem("cartProducts", JSON.stringify(cartObject));
    }
} 

export const QuantitySelectFunctionality = (productData: ObjectType) => {
    const cartProducts = sessionStorage.getItem("cartProducts");

        if(cartProducts !== null){

            const cartObject = JSON.parse(cartProducts)
            return cartObject[productData.id.toString()].quantity;

        }else{
            return "Error: Something went wrong"
        }
}


