const orderBtn = document.querySelector('.order');
///THE ORDER NOW BUTTON CHANGES THE THE PAGE TO THE MENU PAGE
orderBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
});


////USING DOM TO GET THE HTML ELEMENTS
const empty = document.querySelector(".empty");
const check = document.querySelector(".check");


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

  //// THE IF LOOP USED TO CHECK WETHER ANYTHING IS IN THE CART IN ORDER TO DISPLAY THE ITEMS OR THE NO-ITEM MESSAGE

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

           ////// THE HTML  DESIGN CALLED USING TEMPLATE STRING, ASSIGNED TO THE VARIABLE list////
            list.innerHTML += `
            <div class = "eachCard">
                <div  class = "items">
                <div>
                    <button class= "closeBut" onclick = "deleteCard(${index})">X</button>
                </div>
                <img class = "itemImage" src="${items.img}" alt="pick1">
                <div class = description>
                
                <h4 class = "name" >${items.name}</h4>
            <p class = descriptionItem> <small> <b>${items.desc}  </b></small></p>
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

        //// THE list is being appended to the Ul in the html file///

        list_container.appendChild(list)

        //// CALCULATING THE PRICE//
         price = items.price * items.qty

         //// ADDING THE CALCULATION TO A VARIABLE subtotal1

        subtotal1 += price
        })

        ///ADDING THE FINAL CALCULATION AFTER THE LOOP TO THE subtotal element///
        subtotal.innerHTML= `₦${subtotal1}`;

        delivery1 = Number(50);
        delivery.innerHTML = `₦${delivery1}`
        service1 = Number(30);
        service.innerHTML = `₦${service1}`
        total1= delivery1 + service1 + subtotal1
        total.innerHTML = `₦${total1}`
      

        

    }

    ////Event listener for the quantity buttons
    

    /// INCREMENT CODE ///////////////////////
list_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("increase")) {
        let index = e.target.parentElement.dataset.index;
        cartObj[index].qty++;
        updatecart();
        renderCart();
        console.log(index)
    }
//// DECREAMENT CODE ///////////////////////////////
    if (e.target.classList.contains("decrease")) {
        let index = e.target.parentElement.dataset.index;
        if(cartObj[index].qty <=1 ){
            alert("Sorry, Cannot set Quantiy less than 1")
        }else{
        cartObj[index].qty--;
        updatecart();
        renderCart();
        }
       
    }

    
}); 


///FUNCTION TO DELETE CARD 

        function deleteCard(index){
    cartObj.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartObj))
    updatecart()
    
    renderCart()

     if(cartObj.length === 0){
        empty.classList.remove("hide");
        check.classList.add("hide");
    
    }
    
}

///FUNCTION TO ALWAYS RESET THE SUBTOTAL WHEN CALLED
function updatecart (){
    subtotal1 = 0;
    

}

/// CALLING THE RENDER CART FUNCTION        
    renderCart()
    
     
    
        

    
     

        

