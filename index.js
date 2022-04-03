var sidebarBtn = document.querySelector(".sidebarBtn");
var dataUser_table = document.querySelector(".list_data");
var form_user = document.querySelector(".form_user");
var pagination = document.querySelector(".pagination");
var sidebar_close = document.querySelector(".sidebar-close");
var sidebar =  document.querySelector(".sidebar");
var content_body = document.querySelector(".content-body");
sidebarBtn.addEventListener("click",()=>{
  // let sidebar =  document.querySelector(".sidebar");
  let home_section = document.querySelector(".home-section");
  let nav_header = document.querySelector(".nav-header")
  sidebar.classList.toggle("active");
  console.log(sidebar.classList.contains("active"));
  sidebar_close.style.display = "none"
  if(sidebar.classList.contains("active")){
      home_section.classList.toggle("active-home-section");
      nav_header.classList.toggle("active-nav-header");
  }
  else
  { 
      home_section.classList.remove("active-home-section");
      nav_header.classList.remove("active-nav-header");
  }
  
  if (window.innerWidth < 1023)
  {
    console.log("ok click");
    sidebar_close.style.display = "block"
    sidebar.classList.add("active-mobile-sidebar")
  }
})

sidebar_close.addEventListener("click",()=>{
  sidebar.classList.toggle("active-mobile-sidebar");
  console.log("remove");

})


async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function deleteData(url = '') {
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function postData(url = '',data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header

  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function getDetailsData(url = '') {
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function editData(url = '',data = {}) {
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header

  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const url = "https://623d6e6a7efb5abea68e0e23.mockapi.io/products"
// var currentPage = 1, usersPerPage = 10;

var data = []
function getAllData (currentPage,usersPerPage) {
  getData(url)
  .then(data => {
    dataUser_table.innerHTML = loading
    let indexOfLastUser = currentPage * usersPerPage;
    let indexOfFirstUser = indexOfLastUser - usersPerPage;
    let currentData = data.slice(indexOfFirstUser,indexOfLastUser);
    const pageNumbsers = [];
    console.log(data.length);
    for(let i = 1;i <= Math.ceil(data.length / usersPerPage); i++){
      pageNumbsers.push(i)
    }
    console.log(pageNumbsers);
    console.log(currentData);
      
      let output = ``;
      for(let i in currentData) {
        data.push(currentData[i])
          output += `
          <tr class="data${currentData[i].id}">
              <td>${currentData[i].id}</td>
              <td>${currentData[i].name}</td>
              <td>${currentData[i].address}</td>
              <td>${currentData[i].phone}</td>
              <td>${currentData[i].email}</td>
              <td>
                <button class="btn-delete" onClick={btn_delete(${currentData[i].id})}><i class='bx bx-trash' ></i>Delete</button>
                <button class="btn-edit" onClick={btn_edit(${currentData[i].id})}><i class='bx bxs-edit' ></i>Edit</button>
              </td>
          </tr>
          
          `
      }
      const pagination = document.querySelector(".pagination");
      let paginationView =``
      for(let i= 1 ;i<=pageNumbsers.length;i++) {
        paginationView += `

        <li class="page-item page-item${i}" onload="loadPagination(${i})" id="page-item${i}" onClick="paginate(${i})" >
            ${i}
        </li>
  
        `
      }

      pagination.innerHTML = paginationView
      dataUser_table.innerHTML = output
      // console.log(document.querySelector(`.page-item${currentPage}`).style.color = "red");
      document.querySelector(`.page-item${currentPage}`).classList.add("active-paginate");
      
  });
}

console.log(data);
window.onload = function()
{
  dataUser_table.innerHTML = loading
  getAllData(1,10);
};




const paginate = (pageNumbser) => {
  // console.log(pageNumbser);
  dataUser_table.innerHTML = loading
  getAllData(pageNumbser,10);
  // console.log(document.querySelector(`.page-item${pageNumbser}`));
}

function getDetails() {
  getDetailsData(url+``)
}

var btn_delete = (id) =>{
  var x= confirm('Are you sure you want to delete this item?');
  if (x) {
    deleteData(url+`/${id}`)
    document.querySelector(`.data${id}`).style.display = "none"
  }
  else {
    getData(1,10)
  }
}

const btn_edit = (id) =>{
  notification.innerHTML = ""
  // dataUser_table.innerHTML = loading
  getDetailsData(url+`/${id}`).then(data => {
  console.log(data);
  // document.getElementById("name").setAttribute("value",`${data.name}`);
  document.getElementById("name").value = data.name;
  document.getElementById("phone").value = data.phone;
  document.getElementById("address").value = data.address;
  document.getElementById("email").value = data.email;
  
  console.log(document.getElementById("name").value);
  form_user.classList.toggle("active_form");
  content_body.style.display = "none"

  dataUser_table.style.opacity = "0";
  pagination.style.opacity = "0";
  btn_submit.setAttribute("data-id",`${id}`);
  })

}

const btn_close = document.querySelector(".btn-close");
btn_close.addEventListener("click",(e)=>{
  // e.preventDefault();
  content_body.style.display = "block"
  form_user.classList.remove("active_form");
  dataUser_table.style.opacity = "1";
  pagination.style.opacity = "1";
})

const home_content = document.querySelector(".home-content");

const btn_Add = document.querySelector(".btn-add");
btn_Add.addEventListener("click",()=>{
  content_body.style.display = "none"
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
 
  btn_submit.removeAttribute("data-id");
  form_user.classList.toggle("active_form");
  dataUser_table.style.opacity = "0";
  pagination.style.opacity = "0";
})

var nameValue = (e) =>{
    return document.getElementById("name").value;
}
var phoneValue = (e) =>{
  return document.getElementById("phone").value;
}
var addressValue = (e) =>{
  return document.getElementById("address").value;
}
var emailValue = (e) =>{
  return document.getElementById("email").value;
}

const btn_submit = document.getElementById("btn-submit");
const notification = document.querySelector(".alert");
btn_submit.addEventListener("click",(e)=>{
  e.preventDefault();
  console.log(btn_submit.getAttribute("data-id"));
  if ( btn_submit.getAttribute("data-id") != null) {
    dataUser_table.innerHTML = loading

    console.log(nameValue());
    editData(url+`/${btn_submit.getAttribute("data-id")}`,{
      address: addressValue(),
      email: emailValue(),
      name: nameValue(),
      phone: phoneValue()
    }).then(data => {
      console.log(data); 

      getAllData(1,10);
  
    });
    console.log("edit");
    form_user.classList.remove("active_form");
    content_body.style.display = "block"
    dataUser_table.style.opacity = "1";
    pagination.style.opacity = "1";
    notification.innerHTML = ""
    console.log();
  }
  else {
    if (nameValue() === "" || addressValue() === "" || phoneValue() === "" || emailValue() ==="") {
      notification.innerHTML = "Bạn cần phải nhập đầy đủ thông tin!";
    
    }
    else {
      dataUser_table.innerHTML = loading

      console.log("create");
      postData(url, {
        name: nameValue(),
        phone: phoneValue(),
        address: addressValue(),
        email: emailValue()
      }).then(data => {
        console.log(data); 
        getAllData(1,10);
        
      });
      form_user.classList.remove("active_form");
      content_body.style.display = "block"
      dataUser_table.style.opacity = "1";
      pagination.style.opacity = "1";
      notification.innerHTML = ""
    }
 
  }
  // form_user.classList.remove("active_form");
  // dataUser_table.style.opacity = "1";
  // pagination.style.opacity = "1";
 
})

async function searchData(url = '') {
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const search_input = document.querySelector(".search-input");
const btn_search = document.querySelector(".bx-search");
search_input.addEventListener("keydown",(e)=>{
  dataUser_table.innerHTML = loading
  if (e.which == 13) {
    e.preventDefault();
    let params = search_input.value;
    searchData(url+`/?name=${params}`).then(data=>
      {
        
        console.log(data);
        let currentPage = 1, usersPerPage =10;
        let indexOfLastUser = currentPage * usersPerPage;
        let indexOfFirstUser = indexOfLastUser - usersPerPage;
        let currentData = data.slice(indexOfFirstUser,indexOfLastUser);
        const pageNumbsers = [];
        console.log(data.length);
        for(let i = 1;i <= Math.ceil(data.length / usersPerPage); i++){
          pageNumbsers.push(i)
        }
        console.log(pageNumbsers);
        console.log(currentData);
          
          let output = ``;
          for(let i in currentData) {
            data.push(currentData[i])
              output += `
              <tr class="data${currentData[i].id}">
                  <td>${currentData[i].id}</td>
                  <td>${currentData[i].name}</td>
                  <td>${currentData[i].address}</td>
                  <td>${currentData[i].phone}</td>
                  <td>${currentData[i].email}</td>
                  <td>
                  <button class="btn-delete" onClick={btn_delete(${currentData[i].id})}><i class='bx bx-trash' ></i>Delete</button>
                  <button class="btn-edit" onClick={btn_edit(${currentData[i].id})}><i class='bx bxs-edit' ></i>Edit</button>
                  </td>
              </tr>
              
              `
          }
          const pagination = document.querySelector(".pagination");
          let paginationView =``
          for(let i= 1 ;i<=pageNumbsers.length;i++) {
            paginationView += `
    
            <li class="page-item page-item${i}" id="page-item${i}" onClick="paginate(${i})" >
                ${i}
            </li>
      
            `
          }
          
          pagination.innerHTML = paginationView
          dataUser_table.innerHTML = output
          document.querySelector(`.page-item${currentPage}`).classList.add("active-paginate");

        })
}
})
btn_search.addEventListener("click",()=>{
  let params = search_input.value;
  dataUser_table.innerHTML = loading

  searchData(url+`/?name=${params}`).then(data=>
    {
      console.log(data);
    let currentPage = 1, usersPerPage =10;
    let indexOfLastUser = currentPage * usersPerPage;
    let indexOfFirstUser = indexOfLastUser - usersPerPage;
    let currentData = data.slice(indexOfFirstUser,indexOfLastUser);
    const pageNumbsers = [];
    console.log(data.length);
    for(let i = 1;i <= Math.ceil(data.length / usersPerPage); i++){
      pageNumbsers.push(i)
    }
    console.log(pageNumbsers);
    console.log(currentData);
      
      let output = ``;
      for(let i in currentData) {
        data.push(currentData[i])
          output += `
          <tr class="data${currentData[i].id}">
              <td>${currentData[i].id}</td>
              <td>${currentData[i].name}</td>
              <td>${currentData[i].address}</td>
              <td>${currentData[i].phone}</td>
              <td>${currentData[i].email}</td>
              <td>
                <button class="btn-delete" onClick={btn_delete(${currentData[i].id})}><i class='bx bx-trash' ></i>Delete</button>
                <button class="btn-edit" onClick={btn_edit(${currentData[i].id})}><i class='bx bxs-edit' ></i>Edit</button>
              </td>
          </tr>
          
          `
      }
      const pagination = document.querySelector(".pagination");
      let paginationView =``
      for(let i= 1 ;i<=pageNumbsers.length;i++) {
        paginationView += `

        <li class="page-item page-item${i}" id="page-item${i}" onClick="paginate(${i})" >
            ${i}
        </li>
  
        `
      }
      pagination.innerHTML = paginationView
      dataUser_table.innerHTML = output
      document.querySelector(`.page-item${currentPage}`).classList.add("active-paginate");

    })
})
const loading = `<div class="loader"></div>`

const btn_all = document.querySelector(".btn-alldata");
btn_all.addEventListener("click",()=>{
  dataUser_table.innerHTML = loading
  getAllData(1,10);
})

const arrange_params = document.getElementById("arrange");
const arrangeValue = ()=>{
  console.log(arrange_params.value); 
}

// document.addEventListener("click",()=>{
//   console.log("ok");
// })