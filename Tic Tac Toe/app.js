const playerOne = document.querySelector("#player1");
const playerTwo = document.querySelector("#player2");
const error = document.querySelector(".error");
const gameboard = document.querySelector(".gameboard");
const rows = Array.from(document.querySelectorAll(".row"));
const restart = document.querySelector(".btn");
const x = [];
const o = [];
let data = gameboard.dataset.move;

const player = (name, char, arr) => {
  this.name = name;
  this.char = char;
  this.arr = arr;

  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const modal = document.querySelector(".modal");
  const winnerName = document.querySelector(".winner-name");

  const winner = (arr) => {
    return wins.some((win) => win.every((num) => arr.includes(num)));
  };

  const showSelector = (selector, cl, time) => {
    selector.classList.add(cl);
    setTimeout(() => {
      selector.classList.remove(cl);
    }, time);
  };

  const showModal = (message) => {
    modal.classList.add("show");
    winnerName.textContent = message;
  };

  const render = (el, parent) => {
    if (el.textContent !== "") return;
    el.textContent = this.char;
    this.arr.push(parent.indexOf(el));
    if (winner(arr)) {
      showModal(`${this.name} is the winner`);
    } else if (parent.every((el) => el.textContent !== "")) {
      showModal("no winner try again");
    }
  };

  return { name, char, render, arr, showSelector };
};

restart.addEventListener("click", () => {
  window.location.reload();
});

gameboard.addEventListener("click", (e) => {
  if (playerOne.value === "" || playerTwo.value === "") {
    const playerN = player(name, "char", []);
    playerN.showSelector(error, "show", 2000);
  } else {
    if (data === "O") {
      const player2 = player(playerTwo.value, "O", o);
      player2.render(e.target, rows);
      data = "X";
    } else {
      const player1 = player(playerOne.value, "X", x);
      player1.render(e.target, rows);
      data = "O";
    }
  }
});
