import App from "../App"; 
import Home from "./home"; 
import Shop from "./shop";
import Cart from "./cart";
import ErrorElement from "./errorElement";
import AllCategories from "./shopSubComponents/all";
import MenCategory from "./shopSubComponents/men";
import Electronics from "./shopSubComponents/electronics";
import WomenCategory from "./shopSubComponents/women";
import Jewelery from "./shopSubComponents/jewelery";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />,
                children: [
                    {
                        index: true,    
                        element: <AllCategories />
                    },
                    {
                        path: "men",
                        element: <MenCategory />
                    },
                    {
                        path: "women",
                        element: <WomenCategory />
                    },
                    {
                        path: "electronics",
                        element: <Electronics />
                    },
                    {
                        path: "jewelery",
                        element: <Jewelery />
                    }
                ],

            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    },
]

export default routes;