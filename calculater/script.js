let curentDisplay = "";
let display = document.querySelector("#display");
let button = document.querySelector(".cla-button");
console.log(button);
let button2= document.getElementsByClassName("cla-button");
console.log(button2);

button2[0].addEventListener('click',()=>{
    curentDisplay = "";
    display.value = curentDisplay; 
})

button2[1].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '1';
    display.value = curentDisplay; 
});


button2[2].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '2';
    display.value = curentDisplay; 
});


button2[3].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '+';
    display.value = curentDisplay; 
})

button2[4].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '3';
    display.value = curentDisplay; 
})

button2[5].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '4';
    display.value = curentDisplay; 
})

button2[6].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '-';
    display.value = curentDisplay; 
})

button2[7].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '5';
    display.value = curentDisplay; 
});

button2[8].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '6';
    display.value = curentDisplay; 
});

button2[9].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '*';
    display.value = curentDisplay; 
});

button2[10].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '7';
    display.value = curentDisplay; 
})

button2[11].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '8';
    display.value = curentDisplay; 
});

button2[12].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '/';
    display.value = curentDisplay; 
})

button2[13].addEventListener('click',()=>{
    curentDisplay = eval(curentDisplay);
    display.value = curentDisplay; 
})

button2[14].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '9';
    display.value = curentDisplay; 
});

button2[15].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '0';
    display.value = curentDisplay; 
})
button2[16].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '.';
    display.value = curentDisplay; 
});
button2[17].addEventListener('click',()=>{
    curentDisplay = curentDisplay + '3.141592';
    display.value = curentDisplay; 
});