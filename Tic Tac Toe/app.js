let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let reSetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerX , playerO

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled="true";
        checkWinner();

    })
})
 
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,
        //         boxes[pattern[1]].innerText,   
        //         boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innertext;
        let pos3=boxes[pattern[2]].innertext;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
            }
        }
    }
};