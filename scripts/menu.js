/// TO DISPLAY ITEMS IN THE MENU
let allItems = [...rice, ...Swallows, ...Soups, ...Grills, ...Drinks]
let total = document.getElementById("showing-count")
let total_count = 0

let cat_num = document.querySelectorAll(".cat-tag")

// TO LOOP THROUGH AND GET THE ARRAY ELEMENTS/////////
function displayItems(arrayItems, gridId){
   let grid = document.getElementById(gridId)
   grid.innerHTML = ""

    let section = grid.closest("section")
   let tag = section.querySelector(".cat-tag")

    let count = 0

        arrayItems.forEach((items)=>{
        grid.innerHTML +=  `
          
        <div class="meal-card">
            <div class="meal-img" style="font-size:52px">
        <img src="${items.img}" alt="">
        
      </div>
      <div class="meal-body">
        <div class="meal-cat">${items.category}</div>
        <div class="meal-name">${items.name}</div>
        <div class="meal-desc">${items.desc}</div>
        
        <div class="meal-footer">
          <span class="meal-price">₦${items.price}</span>
          <button class="add-btn" data-name="${items.name}" data-price="${items.price}" data-img="${items.img}" data-qty="${items.qty}">+</button>
        </div>
      </div>
    </div>

        `
    })

    // TO KNOE THE COUNT OF EACH ITEM PER SECTION
     count = arrayItems.length
     tag.innerText = count + " items"

     // TO KNOW THE TOTAL COUNT OF ALL ITEMS
     total_count += count
     total.innerHTML = total_count
   
   



    
}






// TO DISPLAY EACH ITEMS TO THEIR RESPECTIVE GRID
displayItems(rice, 'rice-grid')
displayItems(Swallows, 'Swallows-grid')
displayItems(Soups, 'soups-grid')
displayItems(Grills, 'grills-grid')
displayItems(Drinks, 'drinks-grid')


// TO SEARCH TO ITEMS

let search = document.getElementById("searchInput")

search.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase()

    total_count = 0

    let filteredRice = rice.filter(item =>
        item.name.toLowerCase().includes(value)
    )

    let filteredSwallows = Swallows.filter(item =>
        item.name.toLowerCase().includes(value)
    )

    let filteredSoups = Soups.filter(item =>
        item.name.toLowerCase().includes(value)
    )

    let filteredGrills = Grills.filter(item =>
        item.name.toLowerCase().includes(value)
    )

    let filteredDrinks = Drinks.filter(item =>
        item.name.toLowerCase().includes(value)
    )

    displayItems(filteredRice, 'rice-grid')
    displayItems(filteredSwallows, 'Swallows-grid')
    displayItems(filteredSoups, 'soups-grid')
    displayItems(filteredGrills, 'grills-grid')
    displayItems(filteredDrinks, 'drinks-grid')
})


let cart = []

let button = document.querySelectorAll(".add-btn")

button.forEach((btn)=>{
 btn.addEventListener("click", (e)=>{
    let name = e.currentTarget.dataset.name
    let price = Number(e.currentTarget.dataset.price)
    let img = e.currentTarget.dataset.img
    let qty = Number(e.currentTarget.dataset.qty)
   addCart(name, price, img, qty)
   alert(`${name} added`)
 }) 
})

console.log(cart)

function addCart(name, price, img, qty){
    cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push({name, price, img, qty})
     |
     localStorage.setItem("cart", JSON.stringify(cart))
}








