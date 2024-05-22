const quizData = [
    {
        question: "Which is largest animal in the world",
        options:[
           "Shark",
           "Blue Whale",
           "Lion",
           "Elephant",
        ],
        correct:0,
    },

    {
        question: "Which is smallest animal in the world",
        options:[
            "mouse",
            "Goose",
            "Lion",
            "ant",
         ],
         correct:3,
    },

    {
        question: "Which is largest animal in the world",
        options:[
            "Shark",
            "Blue Whale",
            "Lion",
            "Elephant",
         ],
         correct:2,
    },

    {
        question: "Which is smallest contient in the world",
        options:[
            "Asia",
            "Antratica",
            "Europe",
            "Russia",
         ],
         correct:0,
    },
]



const answerElm = document.querySelectorAll(".answer");

const [questionElem, option_1,option_2,option_3,option_4] = 
document.querySelectorAll(
    "#question , .option_1,option_2,option_3,option_4"
);

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".scores");
const submitBtn = document.querySelector('#submit')



let currentQuiz = 0;
let score = 0;


const loadQuiz = () =>{
        const {question,options} =quizData[currentQuiz]
        questionElem.innerHTML = `${currentQuiz+1}: ${question}`
        options.forEach((currElem,index)=>{
         (window[`option_${index + 1}`].innerHTML = currElem)
        })
}

loadQuiz();


//Step 4: Get Selected Answer Function on Button click


// const getSelectedOption=()=>{
//     let ans_index;
//     answerElm.forEach((currElem,index)=>{
//         if(currElem.checked){
//             ans_index = index;
//         }
//     });
//     return ans_index;
// }  

//OR 


const getSelectedOption=()=>{

let answerElem = Array.from(answerElm);

    return answerElem.findIndex((currElem)=> currElem.checked)

}

const deSelectedAnswer = () =>{
    return answerElm.forEach((currElem) =>currElem.checked = false);
}


submitBtn.addEventListener('click',()=>{
    const selectOptionIndex = getSelectedOption();
    
if(selectOptionIndex === quizData[currentQuiz].correct){
    score = score+1;
    scores.innerHTML = `Score: ${score}`
}
// else{        
//     alert("Submit Your Answer")
//     currentQuiz = currentQuiz-1
// }

currentQuiz = currentQuiz+1;
    if(currentQuiz < quizData.length){
        deSelectedAnswer();
        loadQuiz();
     
    }
    else{
        quiz.innerHTML = `
        <div class = "result">
            <h2> Your Score: ${score}/${quizData.length} Correct Answer </h2>
            <p>Congragulation on Completion of the quiz!!! </p>
            <button class = "reload-button" onclick = "location.reload()"> Play Again </button>
        </div>
        `
    }
   
   
}

)