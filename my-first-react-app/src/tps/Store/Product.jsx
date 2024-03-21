export default function Product({product})
{
    return  <tr>
      <td>{product.id}</td>
         <td>{product.title}</td>
         <td>{product.price}</td>
         <td>{product.description}</td>
         <td>{product.category}</td>
         <td><img width={250} height={350} src={product.image} alt="{product.title}"/></td>
        <td><span className="badge badge-pill bg-secondary-subtle text-black">{product.rating.rate}{`/(${product.rating.count} rater)`}</span></td>
     </tr>
}