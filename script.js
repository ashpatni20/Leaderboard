let data = [
  {
    firstName: "Aishwarya ",
    lastName: "Patni",
    city: "India",
    playerScore: 85,
  },
  {
    firstName: "Dhwani",
    lastName: "Patel",
    city: "India",
    playerScore: 90,
  },
  {
    firstName: "Sailee",
    lastName: "Bhavsar",
    city: "India",
    playerScore: 70,
  },
  {
    firstName: "Pooja",
    lastName: "Kumari",
    city: "India",
    playerScore: 120,
  },
];

let section2 = document.querySelector(".section2");
let fname = document.querySelector(".fname");
let sname = document.querySelector(".sname");
let pcity = document.querySelector(".pcity");
let playscore = document.querySelector(".playscore");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let playscoreValue = playscore.value;

  if (
    fname.value === "" ||
    sname.value === "" ||
    pcity.value === "" ||
    playscoreValue === ""
  ) {
    alert("Please fill in all the details.");
  }else{
    let playerObj = {
        firstName: fname.value,
        lastName: sname.value,
        city: pcity.value,
        playerScore: Number(playscore.value),
      };
      data.push(playerObj);
      player();
    
      fname.value = "";
      sname.value = "";
      pcity.value = "";
      playscore = "";
  }

  
});

let rankContainer = document.querySelector(".rankContainer");

function topThreePlayer(arr) {
    rankContainer.innerHTML ="";
  arr.forEach((item, idx) => {
    let div = document.createElement("div");
    let firstN = document.createElement("span");
    let secondN = document.createElement("span");
    let winner  = document.createElement("span");

    div.append(winner, firstN, secondN);
    rankContainer.append(div);
    firstN.innerText = item.firstName;
    secondN.innerText = item.lastName;
    winner.innerHTML = `<i style="font-size:30px" class="throphycolor fa-solid fa-trophy"></i>`
    div.classList.add('rank');
    div.classList.add('throphycolor')

    console.log(arr);
  });
}

function player() {
  section2.innerHTML = "";

  data.sort((a, b) => b.playerScore - a.playerScore);

  let arr = [];

  data.forEach((item, idx) => {
    if (idx < 3) {
      arr.push(item);
    }

    let div = document.createElement("div");
    let firstN = document.createElement("span");
    let secondN = document.createElement("span");
    let country = document.createElement("span");
    let score = document.createElement("span");

    let rightdiv = document.createElement("div");

    let index = document.createElement("span");

    index.innerText = `#${idx + 1}`;

    firstN.innerText = item.firstName;
    secondN.innerText = item.lastName;
    country.innerText = item.city;
    score.innerText = item.playerScore;
    rightdiv.innerHTML = `<i class="bin fa-solid fa-trash"></i><span class="add">+5</span><span class="sub">-5</span>`;

    div.append(index, firstN, secondN, country, score, rightdiv);


    section2.appendChild(div);
    div.classList.add('playerInfo');
    rightdiv.classList.add('playerScore');

    
  });
  topThreePlayer(arr);
  

  checkElement();
}

function checkElement() {
  let addNumber = document.querySelectorAll(".add");
  let subNumber = document.querySelectorAll(".sub");
  let trashBin = document.querySelectorAll(".bin");
  addNumber.forEach((val, idx) => {
    val.addEventListener("click", (e) => {
      data[idx].playerScore += 5;
      player();
    });
  });

  subNumber.forEach((val, idx) => {
    val.addEventListener("click", (e) => {
      data[idx].playerScore -= 5;
      player();
    });
  });

  trashBin.forEach((val, idx) => {
    val.addEventListener("click", (e) => {
      data.splice(idx, 1);
      player();
    });
  });
}

document.addEventListener("DOMContentLoaded", player());
