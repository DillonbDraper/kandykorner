import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { ProductTypeContext } from "./ProductTypeProvider"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        getProductTypes().then(getProducts)
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {

                    const matchingType = productTypes.find(type => type.id === product.productType)
                    return <Product key={product.id} Product={product} ProductType={matchingType} />
                })
            }
        </div>
    )
}