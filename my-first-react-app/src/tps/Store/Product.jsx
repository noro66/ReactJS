export default function Product({product})
{

    console.log(product)
    return  <tr>
      <td>{product.id}</td>
         <td>{product.title}</td>
         <td>{product.price}</td>
         <td>{product.description}</td>
         <td>{product.category}</td>
         <td>{product.image}</td>
        <td>{product.rating.rate}{ ` (${product.rating.count}) rater`}</td>
     </tr>
}