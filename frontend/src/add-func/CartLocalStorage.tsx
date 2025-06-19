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
        const prices = Object.values(JSON.parse(cartProducts));
        let total = 0;
        for(let price of prices){
            total += Number(price);
        }
        return total;
    }else{
        return 0;
    }   
}