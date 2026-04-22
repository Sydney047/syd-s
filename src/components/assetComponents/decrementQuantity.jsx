export default function decreaseQuantity ( { id, products, setProducts } ) {
    let newProducts = [];

    products.map( ( product )=> {
        if ( product.id === id ) {
            if ( product.quantity === 0 ) {
                newProducts.push( product );
            } else {
                product.quantity--;
                newProducts.push( product );
            }
            
        } else 
            newProducts.push( product );
    })

    setProducts( newProducts );
}