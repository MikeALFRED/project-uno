
  document.addEventListener('DOMContentLoaded',async(event)=>{
     let gymClothes = await getGymclothes()
     displayGymClothes(gymClothes)
    addToCart(gymClothes)
  
  })
 function displayGymClothes(gymClothes){

  let gymClothesCards = gymClothes.map((gymcloth)=>{
    return`
    <div class="product-grid" >
    <div class="product-item">
    <h2>Featured Products</h2>
      <img src="${gymcloth.image}" alt="products">
      <h3 class = "product-name">${gymcloth.name}</h3>
      <p class = "product-brand">${gymcloth.brand}</p>
      <form>
      <button type= "button" class = "add-to-cart" id = ${gymcloth.id} >Add to Cart</button>
      </form>
    </div>
    `
  })
  let GymclothesContainer = document.getElementById("featured-products")
  GymclothesContainer.innerHTML = gymClothesCards
 }



 function getGymclothes(){
  return fetch ("http://localhost:3000/products")
 .then(res => res.json())
 .then(gymClothes =>gymClothes)
 }




 function addToCart(gymClothes) {
    let cartItems = document.querySelector("#cartItems")
    let ul= document.createElement("ul")


      let btnviews = document.querySelectorAll('.add-to-cart')
      btnviews.forEach(btn=>{
    btn.addEventListener("click",(event)=>{

      let ItemsAddedToCart = gymClothes.find((element)=>element.id === event.target.id)
      ul.innerHTML=`
        <li>${ItemsAddedToCart.name}</li>
        <li>${ItemsAddedToCart.price}</li>
      ` 
      cartItems.append(ul)
    })
      })
    }
   


  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    

    if (username === 'admin' && password === 'password') {
      showProfile();
    } else {
      showError();
    }
  }

