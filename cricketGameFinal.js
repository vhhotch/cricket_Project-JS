
// Creating the team from a class and pushed the team players into an array

class Batsman {
  constructor(name) {
    this.name = name;
    this.noOfRuns = 0;
    this.isOut = false;
  }
}

let theTeam = [];

const Batsman1 = new Batsman("Batsman 1"); 
theTeam.push (Batsman1);

const Batsman2 = new Batsman("Batsman 2"); 
theTeam.push (Batsman2);

const Batsman3 = new Batsman("Batsman 3"); 
theTeam.push (Batsman3);

const Batsman4 = new Batsman("Batsman 4"); 
theTeam.push (Batsman4);

const Batsman5 = new Batsman("Batsman 5"); 
theTeam.push (Batsman5);

const Batsman6 = new Batsman("Batsman 6"); 
theTeam.push (Batsman6);

const Batsman7 = new Batsman("Batsman 7"); 
theTeam.push (Batsman7);

const Batsman8 = new Batsman("Batsman 8"); 
theTeam.push (Batsman8);

const Batsman9 = new Batsman("Batsman 9"); 
theTeam.push (Batsman9);

const Batsman10 = new Batsman("Batsman 10"); 
theTeam.push (Batsman10);

const Batsman11 = new Batsman("Batsman 11"); 
theTeam.push (Batsman11);

console.log (theTeam);

//the game scoring

const gameResultString = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"

let gameTotalPoints = 0;

//function to add up the game score. 

const teamScoring =  (gameResultString) => {
  for (i=0; i<gameResultString.length; i++){
    let runsRun = parseInt (gameResultString.charAt(i), 10);
      if (Number.isInteger(runsRun)){
        gameTotalPoints += runsRun;
      }
  }
  console.log (gameTotalPoints)
}

teamScoring  (gameResultString);

//The team chooses who is to be the first two batsmen on the field

let firstBatman = theTeam[0];
let secondBatsman = theTeam[1];
let waitingBatsmen = theTeam.slice(2);
let playersPlayed = theTeam.slice(0,2);

//setting up the game

let activeBatsman = firstBatman;
let nonActiveBatsman = secondBatsman;
let noOfBallsBowled = 0
let runsRun;

const playGame =  (gameResultString) => {
  for (let i =0; i<gameResultString.length; i++){
    runsRun = parseInt (gameResultString.charAt(i), 10);
      if ((runsRun===1)||(runsRun===3)) {
        oneOrThreeRunsScoring();
        noOfBallsBowled +=1;
          if (noOfBallsBowled%6==0){
            completeOver();
          }
      }
      else if ((runsRun===2)||(runsRun===4)||(runsRun===6)){
        addRunsToBatmanRuns();
        noOfBallsBowled += 1;
         if (noOfBallsBowled%6==0){
            completeOver()
          }
      }
      else if (gameResultString.charAt(i) === "W") {
        noOfBallsBowled+=1
        wicket();
          if (noOfBallsBowled%6==0){
           completeOver()
          }
      }
      else {
        noOfBallsBowled +=1
          if (noOfBallsBowled%6==0){
            completeOver()
          }
      }
  }
}

const swapBatsmenEnds = () => {
  let previousActiveBatsman1 = activeBatsman;
  activeBatsman = nonActiveBatsman;
  nonActiveBatsman = previousActiveBatsman1;
}

const oneOrThreeRunsScoring = () => {
  addRunsToBatmanRuns();
  swapBatsmenEnds();
}

const addRunsToBatmanRuns = () =>{
  activeBatsman.noOfRuns += runsRun;
}

const completeOver = () => {
  swapBatsmenEnds();
}

const wicket = () => {
  activeBatsman.isOut = true;
    if (waitingBatsmen.length >0) {
     activeBatsman = waitingBatsmen.shift();
    }
}

playGame (gameResultString);
console.log (theTeam)


const printTeamResults = () => {
  for (i=0; i<theTeam.length; i++){
    let message = `${theTeam[i].name}:`
    //ToDo need to add a property that records if a batsman has played or not, the task asked for all those who had not batted to be marked with '-'. In this example all the batsmen have been on teh field. 
    // if (theTeam[i].noOfRuns === 0 && !theTeam[i].isOut){
    //   console.log (message.concat ("-")); 
    // }
    if (!theTeam[i].isOut){
      console.log (message.concat (`${theTeam[i].noOfRuns} not out`));
    }
    else {
      console.log (message.concat (`${theTeam[i].noOfRuns}`))
    }
  }
}

printTeamResults()