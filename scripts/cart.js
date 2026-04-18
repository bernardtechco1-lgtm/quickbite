const orderBtn = document.querySelector('.order');

orderBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
});

function addFoodCard(itemImage, foodName, foodDescription, foodPrice){ 
    
    return `
            <div class = "eachCard">
                <div  class = "items">
                <div>
                    <button class= "closeBut">X</button>
                </div>
                <img class = "itemImage" src="${itemImage}" alt="pick1">
                <div class = description>
                
                <h4 class = "name" >${foodName}</h4>
            <p class = descriptionItem> <small> <b> ${foodDescription} </b></small></p>
            <div class = "placeHold" >Munch Box

            </div>
            <div class = "quantitySelector">
                    <button class = "buttons">-</button>
                    <span class = "quan">1</span>
                    <button class = "button2">+</button>
                    </div>

                <div class = "price">
                    ₦${foodPrice}
               </div>
            </div>
        </div>`;
}


function cartCheckout(subTotal,estimatedDelivery,serviceFee,total,arrivalTime){ 
    
    return `
    <div class = "check">

        <div class = "checkout">
            <h2 class = "h1">Order Summary</h2>
            <div class = "remH">
                <h5 style="padding-bottom: 20px;">Subtotal</h5>
        
                <h5 style="padding-bottom: 20px; ">Estimated Delivery</h5>
                <h5 style="padding-bottom: 10px;">Service Fee</h5>
                <div class ="checkoutPrice">
                    <h5 style="padding-bottom: 20px;">₦${subTotal}</h5>
                    <h5 style="padding-bottom: 20px;">₦${estimatedDelivery}</h5>
                    <h5 >₦${serviceFee}</h5>
                </div>


            </div>
            
            <hr class = "line">
            <br>

            <div class = "checkoutTotal">

            <div class = "h">
                <h2 id = "light"  >TOTAL DUE</h2>
                <h2  id = "thick1">₦${total}</h2>
            </div>

            
            <div class="ArrivalTime">
                <h6 id = "thick">Estimated arrival</h6>
                <h4 id = "light2">${arrivalTime}</h4>
            </div>

            </div>

            <div class = "checkoutButtonContainer">
                <button class="checkoutButton">Checkout &RightArrow;</button>
            </div>




        
        </div>

    </div>`

}
const getCart =document.createElement("div");
const callCartCheckout = document.createElement("div");
const main = document.getElementById("body");







const empty = document.querySelector(".empty");

let foodArray = [];

    const saved = localStorage.getItem("cart");
    const cartObj = JSON.parse(saved);

   

    for (let itemmm of cartObj){
        let{name, price, img} = itemmm
        foodArray.push([img,name,"",price]);
        }




console.log(foodArray)

function checker(){


if(foodArray.length == 0){
    callCartCheckout.innerHTML = "";
    empty.classList.remove("hide");
    

}
else if(foodArray.length > 0){
    empty.classList.add("hide");
    main.append(callCartCheckout)
}

}
checker();


for (let items of foodArray){
    getCart.innerHTML +=addFoodCard(...items);
    main.append(getCart);
   

};
const deleteButtons = document.querySelectorAll(".closeBut");


function attachDeleteListeners() {
    document.querySelectorAll(".closeBut").forEach((element, index) => {
        element.addEventListener("click", () => {
            element.closest(".eachCard").remove();
            foodArray.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(foodArray));
            attachDeleteListeners();
            updateTotal();
            checker();
        });
    });
}





function updateTotal() {
    let total= 0
/// CALCULATION /////
foodArray.forEach(item =>{
    total += (item[3]);
})
const serviceFee = 30;
const estimatedDelivery = 20;
let grandTotal = total + serviceFee + estimatedDelivery;
callCartCheckout.innerHTML = cartCheckout(total,estimatedDelivery,serviceFee,grandTotal,"5-10min");


}


attachDeleteListeners()
updateTotal()

function quatity(){
    
}