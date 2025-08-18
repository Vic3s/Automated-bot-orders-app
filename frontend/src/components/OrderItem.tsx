import "../styles/order-item.css"
import type { OrderProductType, OrderType} from "../Types/Types"

interface IOrderItem{
    orderData: OrderType
}

export const OrderItem: React.FC<IOrderItem> = ({ orderData }) => {
 
    return (
        <>
            <div className="order-item-container">
                <div className="order-item-left-side">
                    <div className="order-number-container">
                        <h4>{orderData.orderNumber}</h4>
                    </div>
                    <div className="bot-path-container">
                        <h5>{orderData.visitedLocations.join(" -> ")}</h5>
                    </div>
                </div>
                <div className="order-item-right-side">
                    <div className="products-list-order-container">
                        {orderData.products.map((product: OrderProductType) => {
                            return (
                                <div className="product-item-container">
                                    <h5 className="product-name-order fw-bold">{product.name}({product.price}€ x{product.quantity}):</h5>
                                    <h5 className="product-price-order">{product.price * product.quantity}€</h5>
                                </div>
                            )
                        })}
                    </div>
                    <div className="total-price-order-container">
                        <h3>{orderData.total}€</h3>
                    </div>
                </div>
            </div>
        </>
    )

}