import type { OrederProductType, CartObjectType} from "../Types/Types";

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
            let price = cartObject[key].price;
            total += price;
        }
        return total;
    }else{
        return 0;
    }   
}

export const CreateCartObject = (productData: OrederProductType) => {
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

export const FillCartObject = (productData: OrederProductType, cartProductsObject: CartObjectType) => {
    const productId = productData.id.toString();
    cartProductsObject[productId] = {
        price: productData.price,
        quantity: 1,
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsObject));
}