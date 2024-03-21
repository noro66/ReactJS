import { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
    const [productList, setProductList] = useState([]);
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductList(data))
            .catch(error => console.error('Error fetching products:', error));
    }

    useEffect(() => {
        getProducts();
    }, []);

   const displayProducts = () =>{
        return productList.map((product)=>{
          return <Product product={product}/>
        })
    }
    // displayProducts();
    return (
        <div className='container mt-3'>
            <h1>Products list</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {displayProducts()}
                </tbody>
            </table>
        </div>
    );
}
