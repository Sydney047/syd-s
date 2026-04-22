import { useOutletContext, Link } from "react-router"
import { useEffect, useState } from "react";
//styling
import style from './shopSubComponents/categories.module.css';
//icon
import { GiShoppingCart } from "react-icons/gi";
//product card
import CartCard from "./assetComponents/cartCard";
//add and reduce items functions
import increaseQuantity from "./assetComponents/incrementQuantity";
import decreaseQuantity from "./assetComponents/decrementQuantity";
//bill calculater
import billCalculator from "./assetComponents/bill";

export default function Cart() {
    const { products, setProducts, cart } = useOutletContext();

    if ( cart.length === 0 ) {
        return <div className={ style.emptyCart }>
            <GiShoppingCart size='10em'/>
            <h3>Ohhh... Your cart is empty</h3>
            <p>But it doesn't have to be😊</p>
            <button ><Link to='/shop' >SHOP NOW</Link></button>
        </div>
    }

    return (<section className={ style.cart } >
        <section className={ style.cartProductHolder } >
            <h2 className={ style.cartTitle } >My Cart</h2>
            { cart.map( product => {
                return <CartCard key={ product.id } product={ product } 
                    incrementFunction={ ()=> increaseQuantity( { id: product.id, products: products, setProducts: setProducts } ) }
                    decrementFunction={ ()=> decreaseQuantity( { id: product.id, products: products, setProducts: setProducts } ) } />
            })}
        </section>
        <aside className={ style.bill } >
            <h3>Order Summary</h3>
            <div>
                <p>Total of:</p>
                <p>{ cart.length } items</p>
                <p>Subtotal:</p>
                <p>&#36;{ billCalculator( { items: cart } ) }</p>
                <p>Shipping Fee</p>
                <p>&#36;0.00</p>
                <p>Tax Charges</p>
                <p>&#36;0.00</p>
            </div>
            <h4>Total:  &#36;{ billCalculator( { items: cart } ) }</h4>
        </aside>
    </section>)
}