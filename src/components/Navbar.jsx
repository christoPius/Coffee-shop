import {FaCoffee} from "react-icons/fa";


function Navbar(){


const links=[
["Home","home"],
["Products","products"],
["Order","order"],
["About","about"]
];


function scroll(id){

document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
})

}



return(

<nav

className="
fixed
top-0
w-full
z-50
bg-black/20
backdrop-blur-xl
border-b
border-white/10
"

>


<div

className="
max-w-7xl
mx-auto
p-5
flex
justify-between
"

>


<h1

className="
text-yellow-500
text-2xl
font-bold
flex
gap-2
items-center
"

>

<FaCoffee/>

BrewCafe

</h1>



<div
className="
hidden
md:flex
gap-10
"
>

{
links.map(item=>(


<button

onClick={()=>scroll(item[1])}

className="
hover:text-yellow-400
duration-300
"

>

{item[0]}

</button>


))
}


</div>


</div>



</nav>

)

}


export default Navbar;