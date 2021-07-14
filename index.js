const btn = document.querySelectorAll(".btn-choice");
const quizzIndex = 0;

const dataQuizz = [
  {
    question:
      "In what food Rick transform himself to escape the family therapy session ?",
    answers: ["Carrot", "Apple", "Pickle"],
    result: 2,
  },
  {
    question: "How many grand kids Rick have ?",
    answers: [3, 4, 2],
    result: 2,
  },
  {
    question: "Who is Morty high school crush ?",
    answers: ["Jessica", "Lina ", "Emily"],
    result: 0,
  },
  {
    question: "What is Rick lastname ?",
    answers: ["Bond", "Sanchez", "Smith"],
    result: 1,
  },
  {
    question: "Who are Morty's parents?",
    answers: ["Summer and Dylan", "Ben and Jerry", "Beth and Jerry"],
    result: 2,
  },
];


function displayQuizz(quizzIndex) {

  const currentQuestion = dataQuizz[quizzIndex];
  const total = 0; 

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
    button.addEventListener("click", function(){


        // for (total = 0; currentQuestion.result === true; total++); {
        //     const result = document.querySelector(".total")
        //     result.innerHTML =  total; 
        // }
    

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

    

    const endGame = document.querySelector(".remove-at-the-end")
    endGame.innerHTML = " "


    const titleOver = document.querySelector(".title")
    titleOver.innerHTML = "GAME OVER GLIP GLOPS !"


    // if (total === dataQuizz.length ){
    //     return 'your result is : ${total}, Shabala wub dub dub, you are an expert'
    // } else {
    //     return 'your result is : ${total}, Meh, you are not ready to squash yet'
    // }


 };

 


}



displayQuizz(0);

// function gameOver(){

//     function result (){
//         total=0;
//         i=0;

// //    if (dataQuizz[i].result[index] === true){
// //        return total++}
// // ou
// //         while (dataQuizz[i].result[index]  === true){
// //             return total ++
// //         }

// //   ou

  

//     console.log(result);

//     const total = dataQuizz.length >= 5;

//     if (total === dataQuizz.length ){
//         return 'your result is : ${total}, Shabala wub dub dub, you are an expert'
//     } else {
//         return 'your result is : ${total}, Meh, you are not ready to squash yet'
//     }
// };





