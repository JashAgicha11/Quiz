const qustionDataBase = [
  {
    question: "Fun Segment",
    option1: "Right to Declare Mondays as Optional ",
    option2: "Right to Pet a Dinosaur",
    option3: "Right to have Nap during work hours",
    option4: "Right to Give One Ipl trophy to RCB",
    option5: "Right to Use Mobile Phone at Exam",
    ans: ("answer4")
  },
  {
    question: "Fun Segment - 2",
    option1: "Right To have no Attendance policy ",
    option2: "Right to have all courses as P/NP",
    option3: "Right to Have Snacks at EXPO",
    option4: "Right to Establish Garba at Olympics",
    option5: "Right to Have free Ice-creams on hot days",
    ans: ("answer4")
  },
  {
    question: "Let's get to the Point",
    option1: "Right to higher educaion as optional",
    option2: "Right to use plastic",
    option3: "Right to dance anywhere you like",
    option4: "Right to Equality",
    option5: "Right to engage in Corruption",
    ans: ("answer4")
  },
  {
    question: "Let's get to the Point - R2",
    option1: "Right to freedom ",
    option2: "Right to have unlimited work time ",
    option3: "Right to mandatory Donation",
    option4: "Right to access social media with Restrictions",
    option5: "Right to inequality",
    ans: "answer1"
  },
  {
    question: "Let's get to the Point - R3",
    option1: "Right to have slavery and torture",
    option2: "Right to vehicle modification",
    option3: "Right to mandatory involvement in armed forces(atleast one from each family)",
    option4: "Right to Construction of Sky-scrapers(Tall-Buildings)",
    option5: "Right to Life and Liberty",
    ans: ("answer5"),
  },
];

// getting referrence
const questionContainer = document.querySelector("h2");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option5 = document.querySelector("#option5");
const submitButton = document.querySelector("button");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");

// This function is rendering all the texts

let questionCount = 0;
let score = 0;
const mainFunc = () => {
  const list = qustionDataBase[questionCount];
  questionContainer.innerText = list.question;
  option1.innerText = list.option1;
  option2.innerText = list.option2;
  option3.innerText = list.option3;
  option4.innerText = list.option4;
  option5.innerText = list.option5;

};

mainFunc();

// this function is for answer checking

const goCheckAnswer = () => {
  let answers;
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id;
    }
  });
  return answers;
};

const deselectAll = () => {
  usersAnswer.forEach((data) => {
    data.checked = false;
  });
};

submitButton.addEventListener("click", () => {
  const checkAnswer = goCheckAnswer();
  console.log(checkAnswer);

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < qustionDataBase.length) {
    mainFunc();
  } else {
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
      <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
      <button class='btn' onclick='location.reload()'>Play Again</button>
      `;
  }
});
