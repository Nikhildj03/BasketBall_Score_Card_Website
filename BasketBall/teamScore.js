// import { value1, value2 } from "./login.js";

let team1_Name = document.getElementById("team_NameA");
let team2_Name = document.getElementById("team_NameB");
let btn1_TeamA = document.getElementById("btn-2a");
let btn2_TeamA = document.getElementById("btn-3a");
let resultTeamA = document.getElementById("display_ResultA");
let finalScoreA = document.getElementById("loadbtnA");

let scoreA = 0;

// team1_Name.innerHTML = value1;
// team2_Name.innerHTML = value2;

// For Incerasing 2 Points for Team A
btn1_TeamA.addEventListener("click", (e) => {
  scoreA += 2;
  resultTeamA.innerHTML = scoreA;
});

// For Increasing 3 Points for Team A
btn2_TeamA.addEventListener("click", (e) => {
  scoreA += 3;
  resultTeamA.innerHTML = scoreA;
});

// For Final result of Team A
finalScoreA.addEventListener("click", (e) => {
  finalScoreA = scoreA;
});

// For Team Second

let btn1_TeamB = document.getElementById("btn-2b");
let btn2_TeamB = document.getElementById("btn-3b");
let resultTeamB = document.getElementById("display_ResultB");
let finalScoreB = document.getElementById("loadbtnB");

let scoreB = 0;

// for increament 2 Pounts for Team B
btn1_TeamB.addEventListener("click", (e) => {
  scoreB += 2;
  resultTeamB.innerHTML = scoreB;
});

// for increament 3 Points for team B
btn2_TeamB.addEventListener("click", (e) => {
  scoreB += 3;
  resultTeamB.innerHTML = scoreB;
});

// For Final REsult of team B
finalScoreB.addEventListener("click", (e) => {
  finalScoreB = scoreB;
});

// For Final Result

let finalResult = document.getElementById("finalResult");
let winDisplay = document.getElementById("winTeamResult");

finalResult.addEventListener("click", (e) => {
  if (scoreA > scoreB) {
    winDisplay.innerHTML = " Congrats Team A wins ";
  } else if (scoreB > scoreA) {
    winDisplay.innerHTML = " Congrats Team B wins ";
  } else if (scoreA == scoreB) {
    winDisplay.innerHTML = "Match is Tie ";
  }
});
