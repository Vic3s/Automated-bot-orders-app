import type { ObjectType } from "./Types";

export const DecreaseQuantity = (id: string) => {
    const cartProducts = sessionStorage.getItem("cartProducts");
    
    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        if(cartObject[id] < 1){
            cartObject[id] -= 1;
            sessionStorage.setItem("cartProducts", JSON.stringify(cartObject));
        }
        
    } 
}
export const IncreaseQuantity = (id: string) => {
    const cartProducts = sessionStorage.getItem("cartProducts");
    
    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        cartObject[id] += 1;
        sessionStorage.setItem("cartProducts", JSON.stringify(cartObject));
    }
} 

export const QuantitySelectFunctionality = (productData: ObjectType) => {
    const cartProducts = sessionStorage.getItem("cartProducts");

        if(cartProducts !== null){

            const cartObject = JSON.parse(cartProducts)
            return cartObject[productData.id.toString()];

        }else{
            return "Error: Something went wrong"
        }
}

export const CreateCartObject = () => {
    const cartProducts = sessionStorage.getItem("cartProducts");

    if(cartProducts !== null){
        const cartObject = {}
        sessionStorage.setItem("cartObject", JSON.stringify(cartObject))
    }else{
        return ;
    }

}
