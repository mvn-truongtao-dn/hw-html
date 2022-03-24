var shoppingCart = (function(){
    cart = [];
    function Item(name, price, img, count) {
        this.name = name;
        this.price = price;
        this.img = img
        this.count = count;
    }
    
    function saveCart() {
        sessionStorage.setItem('shoppingCart',JSON.stringify(cart));
    }
    
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }
    
    var obj = {};
    
    obj.addItemToCart = function(name, price, img, count) {
        for(var item in cart) {
            if(cart[item].name === name) {
                cart[item].count ++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, img ,count );
        cart.push(item);
        saveCart();
    }
    
    obj.listCart = function() {
        var cartCopy = [];
        for(i in cart) {
            item = cart[i];
            itemCopy= {};
            for(p in item) {
                itemCopy[p] = item[p]
            }
            cartCopy.push(itemCopy)
        }
        return cartCopy
    }

    obj.totalCount = function() {
        var totalCount = 0;
        for(var item in cart) {
          totalCount += cart[item].count;
        }
        return totalCount;
      }

    obj.setCountItem = function() {
       for(var i in cart) {
           if(cart[i].name === name) {
               cart[i].count --;
           }
           if(cart[i].count === 0) {
               cart.splice(i,1);
           }
       }
    }

    obj.removeItemFromCartAll = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart.splice(item, 1);
            break;
          }
        }
        saveCart();
      }

    return obj;
})();
var button = document.getElementsByClassName("add-to-cart");
console.log(button[1]);
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click',function(e){
        e.preventDefault();
        console.log(this.getAttribute('data-name'));
        var name = this.getAttribute('data-name');
        var img = this.getAttribute('data-img');
        var price = this.getAttribute('data-price');
        shoppingCart.addItemToCart(name, price,img ,1);
        displayCart()
    });
    
  }
 
function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = `<tr>
    <th>stt</th>
    <th>product</th>
    <th>quatily</th>
    <th>action</th>
</tr>`;
    console.log(cartArray);
    for (var i in cartArray) {
        output += `
       
        <tr class="data-item-cart">
            <td>${parseInt(i)+1}</td>
            <td>
                <img src=${cartArray[i].img}></img>
                <h1>${cartArray[i].name}</h1>
            </td>
            <td class="btn-up-down">
                <input type="submit" class="btn-down" value="-">
                <span>${cartArray[i].count}</span>
                <input type="submit" value="+">
            
           
            </td>
            <td><button class='btn-delete' data-name=${cartArray[i].name}>Delete</button></td>
        
        </tr>   
        `
    }

    if ( document.getElementById("table-cart") === null )
    {
        document.getElementById("quatily").innerHTML = shoppingCart.totalCount();

    }
    else {
        document.getElementById("table-cart").innerHTML = output;
        document.getElementById("quatily").innerHTML = shoppingCart.totalCount();

    }
    console.log(shoppingCart.totalCount());

    
}

var deleteItem = function(){
   var btn_Delete = document.getElementsByClassName("btn-delete");
    for(var i = 0;i<btn_Delete.length;i++)
    {
        btn_Delete[i].addEventListener("click",function(){
            var name = this.getAttribute('data-name');
            shoppingCart.removeItemFromCartAll(name);
            displayCart();
        })
    }
}
deleteItem();
displayCart()
