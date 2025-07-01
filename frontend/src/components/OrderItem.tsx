import "../styles/order-item.css"
import type { OrderType, OrederProductType } from "../Types/Types"

interface IOrderItem{
    orderData: OrderType
}

export const OrderItem: React.FC<IOrderItem> = ({ orderData }) => {
 
    return (
        <>
            <div className="order-item-container">
                <div className="order-item-left-side">
                    <div className="order-number-container">
                        <h3>{orderData.accountOrder}</h3>
                    </div>
                    <div className="bot-path-container">
                        <h3>{orderData.visitedLocations.join(" -> ")}</h3>
                    </div>
                </div>
                <div className="order-item-right-side">
                    <div className="products-list-order-container">
                        {orderData.products.map((product: OrederProductType) => {
                            return (
                                <div className="product-item-container">
                                    <h3 className="product-name-order">{product.name}:</h3>
                                    <h3 className="product-price-order">{product.price}</h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="total-price-order-container">
                        <h2>{orderData.total}</h2>
                    </div>
                </div>
            </div>
        </>
    )

}