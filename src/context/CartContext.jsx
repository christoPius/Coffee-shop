import {

createContext,
useContext,
useState,
useEffect

} from "react";



const CartContext=createContext();



export function CartProvider({children}){


const [cart,setCart]=useState(

JSON.parse(
localStorage.getItem("cart")
) || []

);



useEffect(()=>{

localStorage.setItem(
"cart",
JSON.stringify(cart)
)


},[cart])





function addToCart(product){


setCart([

...cart,
product

])


}



function removeFromCart(id){


setCart(

cart.filter(

item=>item.id!==id

)

)


}




return (


<CartContext.Provider

value={{

cart,
addToCart,
removeFromCart

}}

>


{children}


</CartContext.Provider>


)


}




export function useCart(){

return useContext(CartContext)

}