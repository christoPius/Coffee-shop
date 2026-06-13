import { motion } from "framer-motion";

import coffee from "../assets/Coffee.png";

function CoffeeCup(){

return(

<div
className="
relative
w-full
h-full

flex
justify-center
md:justify-end
items-center

overflow-visible
"
>


<motion.img

src={coffee}

className="
relative
z-10

w-[360px]
sm:w-[450px]

md:w-[650px]
lg:w-[720px]

max-w-none

md:-translate-x-16

select-none

drop-shadow-[0_70px_90px_rgba(0,0,0,1)]
"

initial={{
opacity:0,
x:100,
scale:0.95
}}

animate={{
opacity:1,
x:0,
scale:1
}}

transition={{
duration:1.2,
ease:[0.16,1,0.3,1]
}}

whileHover={{
scale:1.03
}}

/>

</div>

)

}

export default CoffeeCup;