import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProduct] = useState([
        {
          id: 1,
          title: "Apple",
          price: 0.5,
          stock: 100,
        },
        {
          id: 2,
          title: "Banana",
          price: 0.3,
          stock: 150,
        },
        {
          id: 3,
          title: "Orange",
          price: 0.6,
          stock: 80,
        },
        {
          id: 4,
          title: "Mango",
          price: 1.5,
          stock: 50,
        },
        {
          id: 5,
          title: "Strawberry",
          price: 2.0,
          stock: 200,
        },
        {
          id: 6,
          title: "Pineapple",
          price: 3.87,
          stock: 119,
        },
      ]);
      const addProduct = (newProduct) => {
        setProduct([...products, newProduct]);
      };
      // console.log(addProduct());
  return (
    <ProductContext.Provider value={{products, addProduct}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider