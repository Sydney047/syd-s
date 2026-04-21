export default function increaseQuantity ( { id, products, setProducts } ) {
    let newProducts = [];

    products.map( ( product )=> {
        if ( product.id === id ) {
            product.quantity++;
            newProducts.push( product );
        } else 
            newProducts.push( product );
    })

    setProducts( newProducts );
}