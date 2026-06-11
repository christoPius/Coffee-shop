import { motion } from "framer-motion";


function ProductCard({product}){


return(

<motion.div


whileHover={{

scale:1.07,

y:-12

}}


transition={{

type:"spring",

stiffness:500,

damping:25,

mass:0.5

}}


className="
bg-white/10

rounded-3xl

overflow-hidden

cursor-pointer

border
border-white/10
"

>


<img

src={product.image}

className="
w-full

h-64

object-cover
"

/>




<div

className="
p-6
"

>


<h3

className="
text-2xl

font-bold

text-white
"

>

{product.name}

</h3>




<p

className="
text-yellow-500

mt-3

font-semibold
"

>

₹{product.price}

</p>



</div>



</motion.div>

)

}


export default ProductCard;