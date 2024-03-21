import { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
    let [productList, setProductList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
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
       if (searchInput !== ''){
           const productListTemp  =  productList.filter(product => {
               return product.title.startsWith(searchInput)
           })
           return productListTemp.map((product)=>{
               return <Product product={product}/>
           })
       }
        return productList.map((product)=>{
          return <Product product={product}/>
        })
    }

    const handledSearch = (e) => {
        e.preventDefault();
        setSearchInput(document.getElementById('searchInput').value);
    }

    return (
        <div className='container mt-3'>
            <h1>Products list : </h1>
            <h2>Search : </h2>
            <form onSubmit={handledSearch}>
            <div className="form-group">
                <label for="searchInput">Search For Products : </label>
                <input type="text" name="" id="searchInput" className="form-control w-25 mb-2" placeholder="" aria-describedby="helpId"/>
                <input type="submit" className="bg-primary" value="Search"/>
            </div>
            </form>
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
