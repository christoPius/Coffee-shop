import ProductCard from "../components/ProductCard";
import {products} from "../data/products";
import { motion } from "framer-motion";


function Products(){


return(

<div id="products" className="
min-h-screen
pt-32
px-8
bg-[#120b06]
"

>


<motion.h1

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
text-5xl
font-bold
mb-12
"

>

Our Coffee Menu ☕

</motion.h1>



<div

className="
grid
md:grid-cols-3
gap-10
max-w-7xl
mx-auto
"

>


{

products.map(

item=>(

<ProductCard

key={item.id}

product={item}

/>

)

)

}


</div>



</div>

)

}


export default Products;