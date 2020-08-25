let logo  = document.querySelector("#nav > div");
let rgb1 = Math.floor((Math.random() *10))*10;
let rgb2 = Math.floor((Math.random() *10))*10;
let rgb3 = Math.floor((Math.random() *10))*10;
let lottoNum = Math.floor((Math.random())*46);
let btn = document.querySelector("#btn");

// select ball color & random number
function ballColor(){
    for(let i=1;i<8;i++)
    {
    let ball = document.querySelector(`#main > div.ball-wrapper > div:nth-child(${i})`)
    lottoNum = Math.floor((Math.random())*46);
        if( lottoNum <= 10 )
            ball.style.backgroundColor = "yellow";
        else if( lottoNum <= 20)
            ball.style.backgroundColor = "blue";
        else if ( lottoNum <= 30 )
            ball.style.backgroundColor = "red";
        else if( lottoNum <= 40)
            ball.style.backgroundColor = "grey"; 
        else 
            ball.style.backgroundColor = "green";  


    
 
    ball.innerText = lottoNum;

    }
}





console.log(lottoNum); 

// change logo color 
function colorChange(){
    rgb1 = Math.floor((Math.random() *10))*10;
    rgb2 = Math.floor((Math.random() *10))*10;
    rgb3 = Math.floor((Math.random() *10))*10; 
    logo.style=`Color:rgb(${rgb1},${rgb2},${rgb3});`;
}


// if click btn create lotto 
btn.addEventListener("click",function(){
    ballColor();
});

// init function
function init(){
    colorChange();
    setInterval(colorChange,1000);
}
init();


