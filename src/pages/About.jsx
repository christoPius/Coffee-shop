import {motion} from "framer-motion";


function About(){


return(

<section

id="about"

className="
min-h-screen
pt-32
px-8
bg-gradient-to-b
from-[#120b06]
to-black
"

>


<motion.div


initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}


className="
max-w-4xl
mx-auto
text-center
"

>


<h1

className="
text-6xl
font-bold
text-yellow-500
"

>

About BrewCafe

</h1>



<p

className="
mt-10
text-xl
text-gray-300
leading-10
"

>

We believe coffee is not just a drink,
it's an experience.

Our premium beans are carefully selected,
roasted perfectly and brewed with passion.

From classic espresso to creamy lattes,
we create moments filled with warmth.

</p>



<div

className="
grid
grid-cols-3
gap-5
mt-16
"

>


<div>
<h2 className="text-4xl text-yellow-400">10K+</h2>
<p>Cups Served</p>
</div>


<div>
<h2 className="text-4xl text-yellow-400">5+</h2>
<p>Years</p>
</div>


<div>
<h2 className="text-4xl text-yellow-400">8K+</h2>
<p>Customers</p>
</div>



</div>


</motion.div>


</section>

)

}


export default About;