import type { ProductType, CartObjectType, OrderProductType, CartItemQuantityNPrice} from "../Types/Types";

export const GetCartProductsObject = () => {
    const cartProducts = localStorage.getItem("cartProducts");

    if(cartProducts !== null){
        return JSON.parse(cartProducts)
    }else{
        return {}
    }   
}

export const getTotalPrice = () => {
    const cartProducts = localStorage.getItem("cartProducts");

    if(cartProducts !== null){
        const cartObject = JSON.parse(cartProducts)
        let total = 0;
        for(let key of Object.keys(cartObject)){
            let price = cartObject[key].price * cartObject[key].quantity;
            total += price;
        }
        return total;
    }else{
        return 0;
    }   
}

export const CreateCartObject = (productData: ProductType) => {
    const cartProducts = localStorage.getItem("cartProducts");

    if(cartProducts !== null){
        //if cart object exitsts fill the object with new values  
        FillCartObject(productData, Object(JSON.parse(cartProducts)));
    }else{
        // create the cartProducts Object with an initial value
        localStorage.setItem("cartProducts", JSON.stringify({
            [productData.id]: {
                price: productData.price,
                quantity: 1,
                location: productData.location
            }
        }))
    }
}

export const DeleteCartObject = () => {
    const cartProducts = localStorage.getItem("cartProducts");
    if(cartProducts !== null){
        localStorage.removeItem("cartProducts")
    }else{
        console.log("Cart Is Empty!");
    }

}

export const FillCartObject = (productData: ProductType, cartProductsObject: CartObjectType) => {
    cartProductsObject[productData.id.toString()] = {
        price: productData.price,
        quantity: 1,
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsObject));
}

export const DeleteCartObjectItem = (productId: string, cartProductsObject: CartObjectType) => {
    delete cartProductsObject[productId];
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsObject));
}

export const getCartItems = () => {
    const cartProducts = localStorage.getItem("cartProducts");

    if(cartProducts !== null){

        const cartObject = JSON.parse(cartProducts);

        const items: string[] = Object.keys(cartObject);
        const quantities: CartItemQuantityNPrice[] = Object.values(cartObject);

        return {0: items, 1: quantities } 
    }else{
        console.log("error: something went wrong")
        return {0: [], 1: [] };
    }        
}