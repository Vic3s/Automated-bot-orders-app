import "../styles/product.css"
import { useState, useEffect} from "react"
import {DecreaseQuantity, IncreaseQuantity, QuantitySelectFunctionality} from "../add-func/quantityFunctionality"
import { CreateCartObject, GetCartProductsObject } from "../add-func/CartLocalStorage"
import type { ObjectType } from "../Types/Types";
import "../styles/product.css"

//ProductType interface
interface IProductItem {
  productData: ObjectType;
}

export const ProductItemCard: React.FC<IProductItem> = ({ productData }) => {

    const[mockImage, setMockImage] = useState("");

    const[quantityProduct, setQuantityProduct] = useState(1)

    const[quantityStyling, setQuantityStyling] = useState(false);

    const apiKey = import.meta.env.VITE_API_KEY;

    const ChangeButtonStyle = () => {

        CreateCartObject(productData);
        setQuantityStyling(true);
    }

    const GetMockImage = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${productData.name}&client_id=${apiKey}`)
        .then(response => { return response.json() })
        .then(data => setMockImage(data.results[1].urls.raw))
        .catch(err => console.log(err))
    }

    const isProductInCart = () => {
        const cartObject = GetCartProductsObject();
        const productId = productData.id.toString()

        if(Object.keys(cartObject).includes(productId)){
            setQuantityStyling(true);
            setQuantityProduct(cartObject[productId].quantity);
        }
    }

    useEffect(() => {
        GetMockImage();
        isProductInCart();
    }, [])

    return (
        <>
            <div className="product-card-container card" style={{"width": "250px", "height": "400px"}}>
                <div className="image-product-card-container">
                    <img src={mockImage} alt="Mock Image For ProductType" style={{"width": "250px", "height": "250px"}} />
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <h3 className="card-title fw-bold">{productData.name}</h3>

                    <div className="price-text-container card-text">
                        <h3 className="price-text">{productData.price}$</h3>
                    </div>
                    {quantityStyling ?
                    <div className="buttons-quantity-select-container">
                        <button className="minus" onClick={() => {DecreaseQuantity(productData); 
                            setQuantityProduct(prev => prev = QuantitySelectFunctionality(productData.id.toString()))}}>-</button>
                        <div className="quantity">{quantityProduct}</div>
                        <button className="plus" onClick={() => {IncreaseQuantity(productData);
                            setQuantityProduct(prev => prev = QuantitySelectFunctionality(productData.id.toString()))
                        }}>+</button>
                    </div>
                    :
                    <div className="button-add-product-container" onClick={ChangeButtonStyle}>
                        <div className="button-add-product btn btn-primary" style={{"width": "220px"}}>
                            Add
                        </div>
                    </div> 
                    }
                </div>
            </div> 
        </>
    )
}