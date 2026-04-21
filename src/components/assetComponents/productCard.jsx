import style from "../shopSubComponents/categories.module.css";

//icon
import { FaStar } from "react-icons/fa";

export default function ProductCard( { product, incrementFunction, decrementFunction } ) {
    return (
        <div className={ style.productCard }>
            <span className={ style.icon } >
                <FaStar color="#f7ef8a" />
                <p>{ product.rating.rate }</p>
            </span>
            <img src={ product.image } alt={ product.title } />
            <h3>{ product.title }</h3>
            <p>{ product.description }</p>
            <h2>${ product.price }</h2>
            { product.quantity === 0 ? <button className={ style.productBtn } onClick={ incrementFunction } >
                    Add to Cart
                </button> : <><button onClick={ decrementFunction } className={ style.cartBtn } >&#x2212;</button>{ product.quantity }
                <button onClick={ incrementFunction } className={ style.cartBtn } >&#x2b;</button></>}
        </div>
    );
}