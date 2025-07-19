let buttonElement = document.querySelectorAll("#box-button"); //array of buttons inside the box
let buttonReset = document.querySelector("#reset-button"); //reset button
let winnerListCombinations = [[0,1,2] , [3,4,5] , [5,6,7] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]];
let resultDisplay = document.querySelector("#result");

//hover effect on the box buttons
buttonElement.forEach((box) => {
    box.addEventListener("mouseover" , () => {
        box.style.backgroundColor = "#2de6e6cf";
        box.style.height = "6rem";
        box.style.width = "6rem" ;


    })
    box.addEventListener("mouseout" , () => {
        box.style.backgroundColor = "#91f0f0cf";
        box.style.height = "5.8rem";
        box.style.width = "5.8rem" ;

    })
})

//hover effect for the reset button
buttonReset.addEventListener("mouseover" , () => {
        buttonReset.style.backgroundColor = "#af4a4ac9";
        buttonReset.style.height = "2.8rem";
        buttonReset.style.width = "4.9rem" ;
})
buttonReset.addEventListener("mouseout" , () => {
        buttonReset.style.backgroundColor = "#a87474";
        buttonReset.style.height = "2.5rem";
        buttonReset.style.width = "4.7rem" ;
})

//after the winner is decided disable the game
let disableAll = () => {
    buttonElement.forEach((box) => {
        box.disabled = true;
    })
}

//tie condition:
let tieCase = () => {
    resultDisplay.innerText += ` Its a Tie`;
    disableAll();
}

//checking the winner
let count = 0;
let checkWinner = (text) => {
    for(let list of winnerListCombinations){
        if(buttonElement[list[0]].innerText!="" && buttonElement[list[1]].innerText!="" && buttonElement[list[2]].innerText!="" ){
            if(buttonElement[list[0]].innerText===buttonElement[list[1]].innerText && buttonElement[list[1]].innerText===buttonElement[list[2]].innerText!=""){
                resultDisplay.innerText += ` Winner is ${text}`;
                disableAll();
            }
            else if(count == buttonElement.length-1){
                tieCase();
                break;
            }
        }
        
    }
    count++;
}

//finalizing the winner:
let turn = 0;
buttonElement.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn === 0){
            box.innerText = "O";
            box.setAttribute("status" , "filled");
            turn++;
        }
        else if(turn === 1){
            box.innerText = "X";
            box.setAttribute("status" , "filled");
            turn--;
        }
        box.disabled = true;

        checkWinner(box.innerText);
    })
})

//reset button:
buttonReset.addEventListener("click" , () => {
    location.reload();
})
