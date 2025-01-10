let gameSeq= [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["btn1","btn2","btn3","btn4"];
let h2  = document.querySelector("h2");
let body  = document.querySelector("body");
let High_Score = 0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelup();
    }
})


function btnFlash(btn){
 btn.classList.add("flash")
 setTimeout(function(){
    btn.classList.remove("flash");
 },300)
}


function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
       btn.classList.remove("userflash");
    },300);
   }


function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random()*4);
    let randomBtn_class = btns[randomIndex];
    let rand_btn= document.querySelector(`.${randomBtn_class}`);
    gameSeq.push(rand_btn.getAttribute("id"));
    
    btnFlash(rand_btn);
    console.log(gameSeq);

}


function btnpress(){
    userFlash(this);
    userSeq.push(this.getAttribute("id"));
    
    check(userSeq.length-1);
  
}


let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function check(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText= `GameOver!! Your Score : ${level} \n Press any key to restart `;
        body.classList.add("Gameoverflash")
        setTimeout(function(){
            body.classList.remove("Gameoverflash");
         },1500)
         if(High_Score<=level){
            High_Score=level;
         }
         h3 = document.querySelector("h3");
         h3.innerText = `Highest Score : ${High_Score}`;
         reset();
    }
}

function reset(){
     gameSeq= [];
     userSeq = [];
     started = false;
     level = 0;
}

