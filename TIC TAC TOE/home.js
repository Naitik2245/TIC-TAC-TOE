// TIC TAC TOE
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;
let winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let newgame = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 == true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }

    });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};


let disableboxes = () => {
    for (let boxs of boxes) {
        boxs.disabled = true;
    }
}
let enableboxes = () => {
    for (let boxs of boxes) {
        boxs.disabled = false;
        boxs.innerText = "";
    }
}

let showwinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

let checkwinner = () => {
    for (let pattern of winningPattern) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if (post1val != "" && post2val != "" && post3val != "") {
            if (post1val == post2val && post2val == post3val) {
                console.log("winner", post1val);
                showwinner(post1val);
                return true;
            }
        }
    }
    return false;
};

resetbtn.addEventListener("click", newgame);