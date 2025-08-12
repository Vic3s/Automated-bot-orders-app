import "../styles/cart-item.css"
import { useState, useEffect } from "react"
import {DecreaseQuantity, IncreaseQuantity, QuantitySelectFunctionality} from "../add-func/QuantityFunctionality"
import type { ObjectType } from "../Types/Types"
import { GetCartProductsObject } from "../add-func/CartLocalStorage";

interface IcartItem {
  cartItemData: ObjectType;
  onStateChange: Function;
}

export const CartItem: React.FC<IcartItem> = ({cartItemData, onStateChange}) => {

    const apiKey = import.meta.env.VITE_API_KEY;

    const[mockImage, setMockImage] = useState("");

    const[quantityProduct, setQuantityProduct] = useState(1)

    const GetMockImage = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${cartItemData.name}&client_id=${apiKey}`)
        .then(response => { return response.json() })
        .then(data => setMockImage(data.results[1].urls.raw))
        .catch(err => console.log(err))
    }

    const setProductQuantitySelected = () => {
            const cartObject = GetCartProductsObject();
            const productId = cartItemData.id.toString()
    
            setQuantityProduct(cartObject[productId].quantity);
        }

    useEffect(() => {
        GetMockImage();
        setProductQuantitySelected();
    }, [])

    return (
        <>
            <div className="cart-item-container">
                <div className="product-info">
                    <div className="image-cart-container">
                        <img src={mockImage} alt="Product Image" />
                    </div>
                    <h4>{cartItemData.name}</h4>
                </div>
                <div className="quantity-price-cart-container">
                    <div className="buttons-quantity-select-container">
                        <button className="minus btn-primary" onClick={() => {DecreaseQuantity(cartItemData); 
                            setQuantityProduct(prev => prev = QuantitySelectFunctionality(cartItemData.id.toString()));
                            onStateChange();
                            }}>-</button>
                        <div className="quantity">{quantityProduct}</div>
                        <button className="plus btn-primary" onClick={() => {IncreaseQuantity(cartItemData);
                            setQuantityProduct(prev => prev = QuantitySelectFunctionality(cartItemData.id.toString()));
                            onStateChange();
                            }}>+</button>
                    </div>
                    <div className="price-cart-container">
                        <h3>{cartItemData.price}</h3>
                    </div>
                </div>
            </div>
        </>
    )

}