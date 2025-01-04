let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#Msg");
let draw = document.querySelector(".drawgame");
let turncount = 0;
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8],

];

const resetgame = ()=>{
    turn0 = true;
    enablebtn();
    msgcontainer.classList.add("hide");
    draw.classList.add("hide");
    turncount = 0;
};
boxes.forEach((box) =>{
    box.addEventListener("click" ,( ) =>{
    console.log("Box Was Clicked");
    turncount++;
   if(turn0){
    box.innerText = "O";
    turn0=false;
   }
  
   else{
    box.innerText = "X";
    turn0 = true;
   }
   if(turncount===9){
    draw.innerText=` OOps Match Is Draw .....Reset the game and try another game ! `;
    draw.classList.remove("hide");
}
   box.disabled = true;
   checkWinner();
 
    
 });
});

const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
};
const disablebtn = () => {
    for(let box of boxes){
       box.disabled = true;
    }
};
const showwineer = (winner) => {
    msg.innerText=`Congrats, winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disablebtn();
};
const checkWinner =() =>{
    for( let pattern of winPatterns){
        let poss1nval = boxes[pattern[0]].innerText;
        let poss2nval = boxes[pattern[1]].innerText;
        let poss3nval = boxes[pattern[2]].innerText;

        if(poss1nval != "" && poss2nval != "" && poss3nval !=""){
            if(poss1nval === poss2nval && poss2nval === poss3nval) {
                console.log("Winner" , poss1nval);
                showwineer(poss1nval);
            } 
        
        }
    }

};


newgamebtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);


