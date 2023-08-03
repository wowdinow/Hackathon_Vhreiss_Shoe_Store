const listProduct = [
    {
        merk : "Adudu",
        name: "Adudu Classic",
        price: 1_500_000,
        imageUrlUrl: URL("../assets/img/1.jpg")
    },
    {
        merk : "Niko",
        name: "Niko Vintage Pink",
        price: 1_000_000,
        imageUrl: URL("../assets/img/2.jpg")
    },
    {
        merk : "Pumo",
        name: "Pumo Run 2030",
        price: 2_500_000,
        imageUrl: URL("../assets/img/3.jpg")
    },
    {
        merk : "Adudu",
        name: "Adudu Run Free White",
        price: 2_000_000,
        imageUrl: URL("../assets/img/4.jpg")
    },
    {
        merk : "Adudu",
        name: "Adudu Boost 99.0",
        price: 5_000_000,
        imageUrl:URL("../assets/img/5.jpg")
    },
    {
        merk : "Adudu",
        name: "Adudu Super Boost Black",
        price: 3_500_000,
        imageUrl:URL("../assets/img/6.jpg")
    },
    {
        merk : "Pumo",
        name: "Pumo Vintage Blue",
        price: 1_000_000,
        imageUrl:URL("../assets/img/7.jpg")
    },
    {
        merk : "Pumo",
        name: "Pumo Simple Sneakers",
        price: 750_000,
        imageUrl:URL("../assets/img/8.jpg")
    },
    {
        merk : "Niko",
        name: "Niko Runner Red",
        price: 3_000_000,
        imageUrl: ""
    },
    {
        merk : "Niko",
        name: "Niko Runner Wow",
        price: 2_000_000,
        imageUrl:""
    },
    {
        merk : "Niko",
        name: "Niko Gym Uye",
        price: 800_000,
        imageUrl:""
    },
    {
        merk : "Niko",
        name: "Niko Beach Runner",
        price: 1_500_000,
        imageUrl:""
    },
    {
        merk : "Niko",
        name: "Niko Green Goblin",
        price: 2_000_000,
        imageUrl:""
    },
    {
        merk : "Niko",
        name: "Niko Matcha Runner",
        price: 2_000_000,
        imageUrl:""
    },
    {
        merk : "Adudu",
        name: "Adudu White Series",
        price: 1_500_000,
        imageUrl:""
    },
    {
        merk : "Bukkery",
        name: "Bukkery Office Series Brown",
        price: 3_000_000,
        imageUrl:""
    },
    {
        merk : "Adudu",
        name: "Adudu Blue Dragon",
        price: 3_500_000,
        imageUrl:""
    },
    {
        merk : "Adudu",
        name: "Adudu Black Strip",
        price: 850_000,
        imageUrl:""
    },
    {
        merk : "Adudu",
        name: "Adudu Sailor Theme",
        price: 1_250_000,
        imageUrl:""
    },
    {
        merk : "Aleksandra Miskin",
        name: "Aleksandra Miskin Boots Brown",
        price: 800_000,
        imageUrl:""
    },
    {
        merk : "Adudu",
        name: "Adudu Yizi Unyaah",
        price: 1_000_000,
        imageUrl:""
    },
    {
        merk : "Adudu",
        name: "Adudu Sport Red",
        price: 1_500_000,
        imageUrl:""
    },
    {
        merk : "Afil",
        name: "Afil Runner Wite",
        price: 1_500_000,
        imageUrl:""
    },
    {
        merk : "Santos Barbatos",
        name: "Santa Barbatos Office Brown",
        price: 2_500_000,
        imageUrl:""
    },
    {
        merk : "Kriket",
        name: "Kriket Boots BrownTree",
        price: 3_000_000,
        imageUrl:""
    },
    {
        merk : "Kriket",
        name: "Kriket Boots Peanut Sauce",
        price: 3_500_000,
        imageUrl:""
    },
    {
        merk : "Charles & Kejepit",
        name: "Charles & Kejepit Uwew",
        price: 2_500_000,
        imageUrl:""
    },
    {
        merk : "Kriket",
        name: "Kriket Boots Brown",
        price: 650_000,
        imageUrl:""
    },
    {
        merk : "Victory No Secret",
        name: "Victory No Secret Black Heels",
        price: 500_000,
        imageUrl:""
    },
    {
        merk : "Chenal",
        name: "Chenal No.6 Heels",
        price: 3_000_000,
        imageUrl:""
    },
]

// toggle class active
const navbarNav = document.querySelector(".navbar-nav")

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {navbarNav.classList.toggle('active')}


// klik di luar sidebar untuk menghilangkan nav bar
const hamburger = document.querySelector("#hamburger-menu")

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active")
    }
})


function renderCard() {
    let tempHtml = "";
  
    for (let i = 0; i < listProduct.length; i++) {
      tempHtml += `
        <div class="card">
          <img src="${
            listProduct[i].imageUrl
          }" alt="ini beneran gambar" width="100">
          <div style="padding: 5px 10px; border-top: 1px solid #888888;">
            <p>${listProduct[i].merk}</p>
            <p>${listProduct[i].name}</p>
            <p>Rp. ${new Intl.NumberFormat("id-ID").format(
              listProduct[i].price
            )}</p>
          </div>
        </div>
      `;
    }
  
    // document.getElementById("container").innerHTML = tempHtml;
    let objHtml = document.getElementById("container"); // object
    objHtml.innerHTML = tempHtml;
  }
  
  renderCard();

let cart = []

function addToCartOrRemove (action){
    function takeAction(container) {
        container.addEventListener("click", function (event) {
            let item_id = event.target.id;

            if (item_id !== "items" && item_id !== "badge") {
                let item = items_array.filter(function (item) {
                    return item.id == item_id;
                })[0];

                let item_in_cart = cart.filter(function (item) {
                    return item.id == item_id;
                })[0];

                if (item_in_cart == undefined) {
                    cart.push(item);
                } else if (action == "add") {
                    item_in_cart.count++;
                } else if (action == "remove") {
                    item_in_cart.count--;
                }

                console.log(cart);
                displayItems(cart, "cart");
            };
        });
    };
}

// addOrRemoveItemsFromCart('add');
// addOrRemoveItemsFromCart('remove');

