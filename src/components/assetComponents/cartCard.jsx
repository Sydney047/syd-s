//icon
import { FaStar } from "react-icons/fa";
//styling 
import style from '../shopSubComponents/categories.module.css'

export default function CartCard( { product, incrementFunction, decrementFunction } ) {
    return (
        <div className={ style.cartCard }>
            <span className={ style.cartIcon } >
                <FaStar color="#f7ef8a" />
                <p>{ product.rating.rate }</p>
            </span>
            <img src={ product.image } alt={ product.title } />
            <h3 className={ style.title } >{ product.title }</h3>
            <p>${ product.price }</p>
            <div>
                <button onClick={ decrementFunction } className={ style.leftCartBtn } >&#x2212;</button><p>{ product.quantity }</p>
                <button onClick={ incrementFunction } className={ style.rightCartBtn } >&#x2b;</button>
            </div>
            <h3 className={ style.subtotal } >Subtotal: &#36;{ product.price * product.quantity }</h3>
        </div>
    );
}