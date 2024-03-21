import { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProductList(data))
            .catch(error => console.error('Error fetching products:', error));
    }

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategoryList(data))
            .catch(error => console.error('Error fetching categories:', error));
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const displayProducts = () => {
        let filteredList = productList;


        if (searchInput !== '') {
            filteredList = filteredList.filter(product =>
                product.title.includes(searchInput) || product.description.includes(searchInput)
            );
        }

        if (searchCategory !== '') {
            filteredList = filteredList.filter(product => product.category === searchCategory);
        }

        return filteredList.map(product => (
            <Product key={product.id} product={product} />
        ));
    }

    const handleCategorySearch = (e) => {
        setSearchCategory(e.currentTarget.value);
    }

    const displayCategories = () => {
        return categoryList.map(category => (
            <button key={category} value={category} onClick={handleCategorySearch} className="btn text-black btn-group-vertical btn-info p-2">{category}</button>
        ));
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(document.getElementById('searchInput').value);
    }

    return (
        <div className='container mt-3'>
            <h1>Products list :</h1>
            <h2>Search :</h2>
            <div className="d-flex justify-content-between py-2">
                <h4>Categories :</h4>
                {displayCategories()}
            </div>
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <label htmlFor="searchInput">Search For Products :</label>
                    <input type="text" name="searchInput" id="searchInput" className="form-control w-25 mb-2"
                           placeholder="" aria-describedby="helpId"/>
                    <input type="submit" className="inline btn text-black btn-group-vertical btn-primary"
                           value="Search"/>
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
