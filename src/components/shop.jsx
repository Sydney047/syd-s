import { useEffect, useState } from "react";
import { Outlet, useOutletContext, NavLink } from "react-router"
//styling
import style from './shop.module.css';

export default function Shop() {
    const { products, setProducts, cart, setCart } = useOutletContext();

    if ( !products ) {
        return (<>
            <h1>Loading... please wait</h1>
        </>)
    }
    return (<div className={ style.div } >
        <nav className={ style.shopNavigation }>
            <NavLink to="/shop" end className={ ({ isActive }) => 
                          ( isActive ? style.navlinkActive: style.navlink ) }>All</NavLink>
            <NavLink to="men" exact='true' className={ ({ isActive }) => 
                          ( isActive ? style.navlinkActive: style.navlink ) }>Men</NavLink>
            <NavLink to="women" exact='true' className={ ({ isActive }) => 
                          ( isActive ? style.navlinkActive: style.navlink ) }>Women</NavLink>
            <NavLink to="electronics" exact='true' className={ ({ isActive }) => 
                          ( isActive ? style.navlinkActive: style.navlink ) }>Electronics</NavLink>
            <NavLink to="jewelery" exact='true' className={ ({ isActive }) => 
                          ( isActive ? style.navlinkActive: style.navlink ) }>Jewelery</NavLink>
        </nav>

        { products && <Outlet context={ { products, setProducts } }/> }
    </div>)
}