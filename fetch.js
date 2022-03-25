const Data = document.getElementById("data");

fetch('https://623d6e6a7efb5abea68e0e23.mockapi.io/products')
  .then(response => response.json())
  .then(data => {
    let output = "";
    for(let i in data) {
        output += ` 
          <div class="card">
              <h1 class="card_name" id="name_card">${data[i].name}</h1>
              <span id="card_year">${data[i].year}</span>
              <div class="color" id="card_color" style="background-color:${data[i].name}"></div>

          </div>
        `
     
    }
    

    Data.innerHTML = output;
});
