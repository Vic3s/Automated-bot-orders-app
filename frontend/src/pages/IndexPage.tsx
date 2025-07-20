import "../styles/index-page.css"
import { useState, useEffect } from "react"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { ProductItemCard } from "../components/ProductItemCard"
import type { ObjectType } from "../Types/Types"

export const IndexPage = () => {

  const[products, setPorducts] = useState([]);

  const GetProducts = () => {

    fetch("http://localhost:5000/get-product-all", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(result => { return result.json(); })
    .then(data => setPorducts(data))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    GetProducts();
  }, [])

  return (
    <>
      <div className="main-content-index">
        <NavBar />

        <div className="product-contents">
          {products.map((product: ObjectType) => {
            return <>
              {product.name && <ProductItemCard productData={product}/> }
            </>
          })}
        </div>

        <Footer />
      </div> 
    </>
  )
}


