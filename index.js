const btn = document.querySelectorAll(".btn-choice");
const resultWindow=document.getElementById('end-sentence');
const quizzIndex = 0;
let total = 0; 


const dataQuizz = [
  {
    question:"In what food Rick transform himself to escape the family therapy session ?",
    answers: ["Carrot", "Apple", "Pickle"],
    result: "Pickle",
  },
  {
    question: "How many grand kids Rick have ?",
    answers: [3, 4, 2],
    result: "2",
  },
  {
    question: "Who is Morty high school crush ?",
    answers: ["Jessica", "Lina ", "Emily"],
    result: "Jessica",
  },
  {
    question: "What is Rick lastname ?",
    answers: ["Bond", "Sanchez", "Smith"],
    result: "Sanchez",
  },
  {
    question: "Who are Morty's parents?",
    answers: ["Summer and Dylan", "Ben and Jerry", "Beth and Jerry"],
    result: "Beth and Jerry",
  },
  {
    question: "What color is mister Meeseeks?",
    answers: ["Green", "Blue", "Purple"],
    result: "Blue",
  },
  {
    question: "What is Beth profession?",
    answers: ["Veterinarian", "Teacher", "Dentist"],
    result: "Veterinarian",
  },
  {
    question: "How many kid Morty have?",
    answers: ["0", "1", "Does he have a kid !?"],
    result: "1",
  },
];



function displayQuizz(quizzIndex) {
console.log(total);

  const currentQuestion = dataQuizz[quizzIndex];
  

  // Display the current question n° on the page  (you can use the quizzIndex);

  const title = document.getElementById("current-quest");
  title.textContent = quizzIndex += 1;

// Diqplay the length of questions

  const questLength = document.getElementById("quest-limit");
  questLength.textContent = dataQuizz.length;

  // Display the question on the page
  
  const quest = document.querySelector(".questions");
  quest.innerHTML = currentQuestion.question;

  // Zone containing the answer buttons
  const divBtn = document.querySelector(".btn-main");
  divBtn.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    // create a dom element
    const createBtn = document.createElement("button");
    // I inject the dom element "create btn" inside the divBtn
    createBtn.innerHTML = answer;
    createBtn.classList.add("btn-choice");
    divBtn.appendChild(createBtn);
    
  });
  

// each time a button is pressed it add 1 index to my displayQuizz
   const btnClick = document.querySelectorAll(".btn-choice").forEach(button=> {
    button.addEventListener("click", function(event){

      const answer = event.target.textContent;


      if (answer === currentQuestion.result){
        total +=1;

     
      }

        nextQuest();

       });
   });


   function nextQuest(){

    quizzIndex + 1;
    
    if (quizzIndex < dataQuizz.length){
        displayQuizz(quizzIndex);
    } else {
        gameOver();
    };
  }; 


  function gameOver(){

    let name = prompt("What's your name again?");

    const endGame = document.querySelector(".remove-at-the-end")
    endGame.innerHTML = " "


    const titleOver = document.querySelector(".title")
    titleOver.innerHTML = "GAME OVER " + name + "!"; 


//create a btn element into my div result
    const resultDiv = document.getElementById("result")
    const resetBtn = document.createElement("button")
    resetBtn.innerHTML = "Reset Game"
    resetBtn.classList.add("reset-btn")
    resultDiv.appendChild(resetBtn)

//  when click reload the page 
    resetBtn.onclick = () => resetGame();

    function resetGame(){
      window.location.reload();
  }


    if (total === dataQuizz.length ){
      resultWindow.innerHTML= `your result is : ${total}, Wubba lubba dub dub, you are an expert`;
      
    } else {
      resultWindow.innerHTML=`your result is : ${total}, Meh, you are not ready to squwash yet`;
    }


 };
 

}


displayQuizz(0);



