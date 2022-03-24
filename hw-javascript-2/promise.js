const myPromise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function(msg="",who="foo") { 
        myResolve(msg + ' Hi ' + who + '!'); 
    }, 2000);
  });
  const myPromise2 = new Promise(function(myResolve, myReject) {
    setTimeout(function(msg="",who="new") { 
        myResolve(msg + ' Hi ' + who + '!'); 
    }, 1000);
  });
Promise.all ([myPromise1,myPromise2]).then ((data)=>{
    console.log('Finish after 300ms:'+data[0]+data[1]);
})
