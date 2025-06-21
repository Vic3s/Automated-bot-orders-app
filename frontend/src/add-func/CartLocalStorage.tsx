import type { OrederProductType } from "./Types";

export const getCartProductsObject = () => {
    const cartProducts = sessionStorage.getItem("cartProducts");

    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        return cartObject
    }else{
        return {}
    }   
}

export const getTotalPrice = () => {
    const cartProducts = sessionStorage.getItem("cartProducts");

    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        let total = 0;
        for(let key of Object.keys(cartObject)){
            let price = cartObject[key].price;
            total += price;
        }
        return total;
    }else{
        return 0;
    }   
}

export const CreateCartObject = (productData: OrederProductType) => {
    const cartProducts = sessionStorage.getItem("cartProducts");

    if(cartProducts !== null){
        const cartObject = {
            [productData.id]: {

                price: productData.price,
                quantity: 1,
                
            }
        }
        sessionStorage.setItem("cartObject", JSON.stringify(cartObject))
    }else{
        return ;
    }

}

export const DeleteCartObject = () => {
    const cartProducts = sessionStorage.getItem("cartProducts");

    if(cartProducts !== null){
        sessionStorage.removeItem("cartObject")
    }else{
        console.log("No Cart Object Exists!");
    }

}