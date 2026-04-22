import { useOutletContext } from "react-router";
import ProductCard from "../assetComponents/productCard";
//styling
import style from "./categories.module.css";
//extra functions
import increaseQuantity from "../assetComponents/incrementQuantity";
import decreaseQuantity from "../assetComponents/decrementQuantity";


export default function Electronics() {
    const { products, setProducts } = useOutletContext();

    return (<>
        <div className={ style.productsContainer }>
            { products.map( product => {
                if ( product.category === "electronics" ) {
                    return (
                        <ProductCard key={ product.id } product={ product } 
                            incrementFunction={ () => increaseQuantity( { id: product.id, products: products, setProducts: setProducts } ) }
                            decrementFunction={ () => decreaseQuantity( { id: product.id, products: products, setProducts: setProducts } ) }
                            className={ style.productCard } />
                    )
                }
            }) }
        </div>
    </>)
}