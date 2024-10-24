let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turn0 = true;
let winningPatterns = [
    [ 0, 1, 2 ],
    [ 0, 3, 6 ],
    [ 0, 4, 8 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 2, 4, 6 ],
    [ 3, 4, 6 ],
    [ 6, 7, 8 ],
];

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        msgContainer.classList.add("hide");
    }
}

//reset button..

const resetButton = () => {
    turn0 = true;
    enableBoxes()
}

resetBtn.addEventListener("click", () => {
    resetButton();
})

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) {
            box.innerText = "0";
            turn0 = false;
        }else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
    
});

let checkWinner = () => {
    for(let pattern of winningPatterns){

        // obtaining the value inside each box..

        position1Val = boxes[pattern[0]].innerText;
        position2Val = boxes[pattern[1]].innerText;
        position3Val = boxes[pattern[2]].innerText;

        // show winner function..

        const showWinner = (winner) => {
            msg.innerText=`Congratulations!!! The winner is ${winner}`
            disableBoxes();
            msgContainer.classList.remove("hide");
        }

        // checking the winner...

        if(position1Val != "" && position2Val != "" && position3Val != ""){
            if(position1Val === position2Val && position2Val === position3Val){
                showWinner(position1Val);
            }
        }
    }

}
