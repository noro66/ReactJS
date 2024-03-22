export default function Product({product})
{
    return  <tr>
      <td>{product.id}</td>
         <td>{product.title}</td>
         <td>{product.price}</td>
         <td>{product.description.slice(0, 100)}</td>
         <td><span class="badge badge-pill text-bg-dark p-2">{product.category}</span></td>
         <td><img width={250} height={350} src={product.image} alt="{product.title}"/></td>
        <td><span className="badge badge-pill bg-secondary-subtle text-black">{product.rating.rate}{`/(${product.rating.count} rater)`}</span></td>
     </tr>
}