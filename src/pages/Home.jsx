import CoffeeCup from "../components/CoffeeCup";
import { motion } from "framer-motion";


function Home(){

return(

<section
id="home"
className="
relative
min-h-screen
overflow-hidden
bg-[#0b1218]
pt-20
"
>


{/* BACKGROUND TEXT */}

<h1
className="
absolute

top-[20%]
left-[28%]

text-[12vw]

font-black

text-white/[0.03]

select-none

hidden
md:block
"
>

BREWCAFE

</h1>





<div
className="
relative
z-10

max-w-7xl
mx-auto

min-h-[85vh]

grid
grid-cols-1
md:grid-cols-[35%_65%]

items-center

px-8

md:gap-5
"
>



{/* TEXT AREA */}

<motion.div

initial={{
x:-80,
opacity:0
}}

animate={{
x:0,
opacity:1
}}


className="
text-center
md:text-left
"

>


<p
className="
tracking-[8px]

text-yellow-500

text-xs
md:text-sm

mb-6
"
>

PREMIUM COFFEE EXPERIENCE

</p>




<h2
className="
text-6xl
md:text-8xl

font-black

text-[#eee3ce]

leading-none
"
>

Golden

<br/>

Moments

</h2>




<p
className="
mt-6

text-gray-400

text-lg
md:text-xl

leading-relaxed
"
>

Luxury roasted coffee crafted for people who love premium taste and elegant moments.

</p>




{/* DESKTOP BUTTON */}

<button

onClick={()=>{

document
.getElementById("products")
.scrollIntoView({
behavior:"smooth"
});

}}


className="
hidden
md:block

mt-10

bg-gradient-to-r
from-yellow-600
to-yellow-400

text-black

font-bold

px-12
py-4

rounded-full

hover:scale-105

duration-300
"
>

Explore Menu →

</button>



</motion.div>







{/* CUP AREA */}

<div
className="
relative

h-[320px]

sm:h-[380px]

md:h-[650px]


flex

justify-center

items-center
"
>


<CoffeeCup/>


</div>






{/* MOBILE BUTTON */}

<button

onClick={()=>{

document
.getElementById("products")
.scrollIntoView({
behavior:"smooth"
});

}}


className="
block
md:hidden

mx-auto

mb-8

bg-gradient-to-r
from-yellow-600
to-yellow-400

text-black

font-bold

px-12
py-4

rounded-full
"
>

Explore Menu →

</button>





</div>


</section>

)

}


export default Home;