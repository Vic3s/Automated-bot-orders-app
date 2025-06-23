import "../styles/cart-item.css"
import { useState, useEffect } from "react"
import {DecreaseQuantity, IncreaseQuantity, QuantitySelectFunctionality} from "../add-func/quantityFunctionality"
import type { ObjectType } from "../Types/Types"

interface IcartItem {
  cartItemData: ObjectType;
}

export const CartItem: React.FC<IcartItem> = ({cartItemData}) => {

    const apiKey = import.meta.env.VITE_API_KEY;

    const[mockImage, setMockImage] = useState("");

    const GetMockImage = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${cartItemData.name}&client_id=${apiKey}`)
        .then(response => { return response.json() })
        .then(data => setMockImage(data.result[0].urls.raw))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        GetMockImage();
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
                        <button className="minus" onClick={(e) => DecreaseQuantity(cartItemData.id.toString())}>-</button>
                        <div className="quantity">{QuantitySelectFunctionality(cartItemData)}</div>
                        <button className="plus" onClick={(e) => IncreaseQuantity(cartItemData.id.toString())}>+</button>
                    </div>
                    <div className="price-cart-container">
                        <h3>{cartItemData.price}</h3>
                    </div>
                </div>
            </div>
        </>
    )

}