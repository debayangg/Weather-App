let x=document.getElementById("x");

navigator.geolocation.getCurrentPosition(position =>{
    console.log(position.coords.latitude);
});

