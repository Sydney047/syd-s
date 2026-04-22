import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router';

import style from './App.module.css';

//icons
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );
  const [ products, setProducts ] = useState( [] );
  const [ cart, setCart ] = useState( [] );

  //adds a quantity property
  function addQuantity( { data } ) {
    let newProducts = [];

    data.map( product => {
      product.quantity = 0;
      newProducts.push( product );
    });

    setProducts( newProducts );
        
  }
  //function for updating the cart
  function updateCart() {
    products.map( product => {
      if ( product.quantity > 0 && !cart.includes( product ) ) {
        setCart( [ ...cart, product ] );
      } else if ( cart.includes( product ) && product.quantity === 0 ) {
        const index = cart.indexOf( product );
        cart.splice( index, 1 );
      } 
    })
  }
  //updates the cart 
  useEffect( () => {
    updateCart();
  }, [ products ] )

  //receives data from api and stores it
  useEffect(() => {
    try {
      fetch( 'https://fakestoreapi.com/products' )
        .then( response => {
          if ( !response.ok ) {
            throw new Error( `HTTP error! status: ${response.status}` );
          }
          return response.json();
        })
        .then( response => {
          console.log( response );
          addQuantity( { data: response } )
        });
    } catch ( error ) {
      setError( error.message || error.statusText || 'Server error' );
    } finally {
      setLoading( false );
    }
    
  }, []);

  if ( loading ) {
    return (<>
        <h1>Loading... please wait</h1>
    </>)
  }

  if ( error ) {
    return (<>
        <h1>{error}</h1>
    </>)
  }

  return ( <>
        <nav className={ style.navigation }>
          <BiSolidShoppingBags className={ style.svg } size='2em' color='#2ec4b5c6'/>
          <h3 className={style.shopName}>Syd's Clothing</h3>
            <NavLink to="/" className={ ({ isActive }) => 
              ( isActive ? style.navlinkActive: style.navlink ) }><IoHome /></NavLink>
            <NavLink to="shop" className={ ({ isActive }) => 
              ( isActive ? style.navlinkActive: style.navlink ) }><GiShoppingBag /></NavLink>
            <NavLink to="cart" className={ ({ isActive }) => 
              ( isActive ? style.navlinkActive: style.navlink ) }><MdShoppingCart /> 
            </NavLink>
        </nav>
        
      { products && <Outlet context={ { products, setProducts, cart } } /> }

      <footer className={ style.footer }>
        <section className={ style.mainFooter } >
          <div className={ style.footerLogo } >
            <BiSolidShoppingBags size='1em' color='#2ec4b5c6'/>
            <h6 className={style.shopNameFooter }>Syd's Clothing</h6>
          </div>
          <div className={ style.footerIcons } >
            <FaXTwitter />
            <FaGithub onClick={ () => window.open( 'https://github.com/Sydney047/syd-s' ) } />
            <GrInstagram onClick={ () => window.open( 'https://www.instagram.com/sydneysage07/' ) } />
          </div>
          <h5 className={ style.contact } >Contact Us</h5>
          <p className={ style.email }>meshcmoose@gmail.com</p>
          <p className={ style.phone }>(+91) 6283114947</p>
          <h5 className={ style.subscribe }>SUBSCRIBE</h5>
          <p className={ style.message }>Enter your email to get notifications about new products and special offers!</p>
          <input type="email" placeholder='Email' className={ style.emailField } />
        </section>
            
        <p>&copy; 2026 Syd's Clothing. All rights reserved.</p>
      </footer>

  </>);
}

export default App
