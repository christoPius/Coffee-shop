function Cart(){


return(

<section

id="order"

className="
min-h-screen
pt-32
bg-[#120b06]
px-8
"

>

<h1

className="
text-center
text-5xl
font-bold
"

>

Order Coffee ☕

</h1>


<form

className="
max-w-xl
mx-auto
mt-12
space-y-5
bg-white/10
p-10
rounded-3xl
"

>


<input placeholder="Full Name"/>

<input placeholder="Country"/>

<input placeholder="PIN Code"/>

<input placeholder="Phone Number"/>

<input placeholder="Coffee Type"/>


<button>

Place Order

</button>


</form>


</section>


)

}

export default Cart;