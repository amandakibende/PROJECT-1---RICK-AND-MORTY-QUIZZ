const btn = document.querySelectorAll(".btn-choice")
const quizzIndex = 0;


const dataQuizz = [
    {
     question : "In what food Rick transform himself to escape the family therapy session ?",
     answers : ["Carrot", "Apple", "Pickle"],
     result : 2
},
    
    {
    question : "How many grand kids Rick have ?", 
     answers : [3, 4, 2],
     result : 2
},
    {
     question : "Who is Morty high school crush ?", 
     answers : ["Jessica", "Lina ", "Emily"],
     result : 0
},
    {
     question : "What is Rick lastname ?",
     answers : ["Bond", "Sanchez", "Smith"],
     result : 1
},
    {
     question : "Who are Morty's parents?", 
     answers : ["Summer and Dylan", "Ben and Jerry", "Beth and Jerry"],
     result : 2
}

]




// Display numbers of questions
//  Each time a btn is clicked display the number inside the array until the end of that array.




// find the correct answers at the end of the game it display the numbers of good answers.
// If all the answers are correct display "shabala wub dub dub, you are an expert" else diplay "meh, you are not ready to squash yet"

// Numbers of questions left, question and answers should appear each time a button is pressed.



// Questions, answers, result are linked, since they are linked questions and object should be in the same array


function displayQuizz(quizzIndex){


    const currentQuestion = dataQuizz[quizzIndex];

    console.log(currentQuestion);

    // Display the current question n° on the page  (you can use the quizzIndex);

     const title = document.getElementById("current-quest");


      title.textContent += 1;
    
    console.log(title);


    // Display the question on the page

     console.log(dataQuizz[0].question);
     const quest = document.querySelector(".questions");

     quest.innerHTML = dataQuizz[0].question;

     console.log(quest);


      // In every button insert the choice text

}


console.log(displayQuizz());

    // each questions will be already write.
    // they will be inside an object,
    // each time a btn is clicked the questions should appear on the paragraph

// Select every button, for every button attach an event handler that will look
// if the current button is the correct answer.



//displayQuizz(quizzIndex)


// Display answers
// I would have an object with answers inside.
// each time a btn is clicked the answers should display in a random btn 


// I need to select what's inside class main in order to input the values of my variables.



// when there is no more questions display the result.

// At the end display the nunmber of correct answers
// count the number of correct answer.
// every time an answer is true we will add 1 in order to have the result.


// I will take all the good answers and return a number of the size of the answers
// if the number of good answers are equal to 5 return "shabala wub dub dub, you are an expert" else "meh, you are not ready to squash yet"
//
//
//
// each time a button is clicked it should display a new array of data