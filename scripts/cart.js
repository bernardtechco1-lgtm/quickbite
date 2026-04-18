const orderBtn = document.querySelector('.order');

orderBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
});




// function cartCheckout(subTotal,estimatedDelivery,serviceFee,total,arrivalTime){ 
    
//     return `
//     <div class = "check">

//         <div class = "checkout">
//             <h2 class = "h1">Order Summary</h2>
//             <div class = "remH">
//                 <h5 style="padding-bottom: 20px;">Subtotal</h5>
        
//                 <h5 style="padding-bottom: 20px; ">Estimated Delivery</h5>
//                 <h5 style="padding-bottom: 10px;">Service Fee</h5>
//                 <div class ="checkoutPrice">
//                     <h5 style="padding-bottom: 20px;">₦${subTotal}</h5>
//                     <h5 style="padding-bottom: 20px;">₦${estimatedDelivery}</h5>
//                     <h5 >₦${serviceFee}</h5>
//                 </div>


//             </div>
            
//             <hr class = "line">
//             <br>

//             <div class = "checkoutTotal">

//             <div class = "h">
//                 <h2 id = "light"  >TOTAL DUE</h2>
//                 <h2  id = "thick1">₦${total}</h2>
//             </div>

            
//             <div class="ArrivalTime">
//                 <h6 id = "thick">Estimated arrival</h6>
//                 <h4 id = "light2">${arrivalTime}</h4>
//             </div>

//             </div>

//             <div class = "checkoutButtonContainer">
//                 <button class="checkoutButton">Checkout &RightArrow;</button>
//             </div>




        
//         </div>

//     </div>`

// }
// const getCart =document.createElement("div");
// const callCartCheckout = document.createElement("div");
// const main = document.getElementById("body");







// const empty = document.querySelector(".empty");





// const foodArray = [
//     ["images/Egusi Soup.webp","Egusi","Egusi soup a very delicious and mouth watering dish", "2,000"],
//     ["images/noodles.webp","Noodles","Noodles a very light yet fulfilling meal", "1,800"],
//     ["images/beans.webp","Beans","Flavoured delicious beans", "1,900"]

// ];

// if(foodArray.length > 0){
//     empty.classList.add("hide");
//     
// } else if(foodArray.length < 0){
//     empty.classList.remove("hide");

// };


// for (items of foodArray){
//     getCart.innerHTML +=addFoodCard(...items);
//     main.append(getCart);
   

// };
// const deleteButtons = document.querySelectorAll(".closeBut");


// // deleteButtons.forEach((element, index)=>{
// //      element.addEventListener("click", (event) => {
// //      event.target.classList.add("exit")


// //       if(foodArray[index]){           
// //         foodArray.splice(index,1)
// //         }
// //      })
    

// //         console.log(foodArray[index])



// //     console.log(element)
// //     console.log(index)
// // });





        



// /// CALCULATION /////
// let total =0;

// foodArray.forEach(item =>{

//     total += Number(item[3].replace("," , ""));
// })
// const serviceFee = 30;
// const estimatedDelivery = 20;
// let grandTotal = total + serviceFee + estimatedDelivery;
// callCartCheckout.innerHTML = cartCheckout(total,estimatedDelivery,serviceFee,grandTotal,"5-10min");

// for(let a = 1; a < deleteCard; a++){
//     deleteCard.addEventListener("click",()=>{
//     deleteCard.classList.add("exit")

// })

// }

// getCart.forEach(item => {
//    console.log(item.addFoodCard()) 
// })



const empty = document.querySelector(".empty");
const check = document.querySelector(".check");

// if(cartObj.length > 0){
//     empty.classList.add("hide");
    
// } else if(cartObj.length < 0){
//     empty.classList.remove("hide");

// };

    /// COLLECTING ITEMS////////////////
    const saved = localStorage.getItem("cart")
    const cartObj = JSON.parse(saved)
    console.log(cartObj)

  let list_container = document.getElementById("list-container")
  let subtotal = document.getElementById("Subtotal")
let delivery = document.getElementById("delivery")
let service = document.getElementById("service")
let total = document.getElementById("total")

  let price = 0
  let subtotal1 = 0
  let total1 = 0
  let delivery1 = 0
  let service1 = 0

      if(cartObj.length === 0){
             empty.classList.remove("hide");
             check.classList.add("hide");

             
        }else{
             empty.classList.add("hide");
             check.classList.remove("hide");
             
             
        }  



        //// DISPLAYING ITEMS ////////////
       function renderCart() {
       
    list_container.innerHTML = "";

        cartObj.forEach(function(items, index){  
        
           let list = document.createElement("li")
            list.innerHTML += `
            <div class = "eachCard">
                <div  class = "items">
                <div>
                    <button class= "closeBut" onclick = "deleteCard(${index})">X</button>
                </div>
                <img class = "itemImage" src="${items.img}" alt="pick1">
                <div class = description>
                
                <h4 class = "name" >${items.name}</h4>
            <p class = descriptionItem> <small> <b>  </b></small></p>
            <div class = "placeHold" >Munch Box

            </div>
            <div class = "quantitySelector" data-index="${index}">
                   <button class="button2 increase">+</button>
            <span class = "quan" >${items.qty}</span>
            <button class="buttons decrease">-</button>
                    </div>

                <div class = "price" >
                    ₦${items.price * items.qty}
               </div>
            </div>
        </div>`;

        list_container.appendChild(list)
         price = items.price * items.qty
         console.log(price)
        subtotal1 += price
        console.log(subtotal1)
        })
        subtotal.innerHTML= `₦${subtotal1}`;
        delivery1 = Number(50);
        delivery.innerHTML = `₦${delivery1}`
        service1 = Number(30);
        service.innerHTML = `₦${service1}`
        console.log(delivery)
        console.log(service)
        total1= delivery1 + service1 + subtotal1
        console.log(total1)
        total.innerHTML = `₦${total1}`
      

        

        // function increaseQty(index){
        //     cartObj[index].qty += 1 
        // }

    }
    
list_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("increase")) {
        let index = e.target.parentElement.dataset.index;
        cartObj[index].qty++;
        updatecart();
        renderCart();
    }

    if (e.target.classList.contains("decrease")) {
        let index = e.target.parentElement.dataset.index;
        if(cartObj[index].qty <=1 ){
            alert("no")
        }else{
        cartObj[index].qty--;
        updatecart();
        renderCart();
        }
       
    }
}); 

        function deleteCard(index){
    cartObj.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartObj))
    updatecart()
    location.reload();
    renderCart()
    
}

function updatecart (){
    subtotal1 = 0;
    

}

        
    renderCart()
    
     
    
        

    
     

        

