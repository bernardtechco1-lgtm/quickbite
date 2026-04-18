const orderBtn = document.querySelector('.order');

orderBtn.addEventListener('click', () => {
    window.location.href = 'menu.html';
});



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
    
     
    
        

    
     

        

