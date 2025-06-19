import "../styles/product.css"
import { useState, useEffect} from "react"
import {DecreaseQuantity, IncreaseQuantity, QuantitySelectFunctionality, CreateCartObject} from "../static/quantityFunctionality"
import type { ObjectType } from "../static/Types";

//ProductType interface
interface ProductItemCard {
  productData: ObjectType;
}

export const ProductItemCard: React.FC<ProductItemCard> = ({ productData }) => {

    const[mockImage, setMockImage] = useState("");

    const apiKey = import.meta.env.VITE_API_KEY;

    const ChangeButtonStyle = (e: any) => {

        CreateCartObject();

        e.currentTarget.className = "buttons-quantity-select-container"

        e.currentTarget.innerHTML =
        '<button class="minus" onClick={(e) => DecreaseQuantity(productData.id.toString())}>-</button>' +
        `<div class="quantity">${QuantitySelectFunctionality(productData)}</div>` +
        '<button class="plus" onClick={(e) => IncreaseQuantity(productData.id.toString())}>+</button>'
    }

    const GetMockImage = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${productData.name}&client_id=${apiKey}`)
        .then(response => { return response.json() })
        .then(data => setMockImage(data.result[0].urls.raw))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        GetMockImage();
    }, [])

    return (
        <>
            <div className="ProductType-card-container">
                <div>{productData.name}</div>
                <div className="image-ProductType-container">
                    <img src={mockImage} alt="Mock Image For ProductType" />
                </div>
                <div className="price-text-container">
                    <h3 className="price-text">{productData.price}</h3>
                </div>
                <div className="button-add-ProductType-container" onClick={ChangeButtonStyle}>
                    <div className="button-add-ProductType">
                        Add
                    </div>
                </div>
            </div> 
        </>
    )

}