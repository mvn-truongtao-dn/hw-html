
const Data = document.getElementById("data");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://623d6e6a7efb5abea68e0e23.mockapi.io/products", true);
xhr.onload = function(){
    console.log(JSON.parse(xhr.response));
    let output = "";
    for(let i in JSON.parse(xhr.response)) {
        output += ` 
          <div class="card">
              <h1 class="card_name" id="name_card">${JSON.parse(xhr.response)[i].name}</h1>
              <span id="card_year">${JSON.parse(xhr.response)[i].year}</span>
              <div class="color" id="card_color" style="background-color:${JSON.parse(xhr.response)[i].name}"></div>

          </div>
        `
     
    }
    

    Data.innerHTML = output;
    
};
xhr.send();