//first create an array of correct answers. 

//     var questions= {
//     q1: ["honda"],
//     q2: ["hyundai"],
//     q3: ["lexus"],
//     q4: ["fiat"],
//   }

var answers= ["honda", "hyundai", "lexus", "fiat"]

var alphabet= ("abcdefghijklmnopqrstuvwxyz").split("");


console.log(alphabet)
//     q1: ["honda"],
//     q2: ["hyundai"],
//     q3: ["lexus"],
//     q4: ["fiat"]
// }
var answer = answers[Math.floor(Math.random() * answers.length)];



var incScore = 0;

var decScore = 0;

var questionIndex = 0; 

var guesses = document.querySelector("#guesses-left").innerHTML

//get underscore to represent word
var answerArray = [];
for (var i=0; i<answer.length; i++) {
    answerArray[i] = "_";
    document.getElementById("word-blanks").innerHTML = answerArray
} 


var remainingLetters = answer.length;

// function renderQuestion() {
//     if (questionIndex < 9) {
//         document.querySelector("#word-blanks").innerHTML = answerArray;
//     }
//      else {
//          alert("Game Over!")
//         document.querySelector("#win-score").innerHTML = "Final Score: " + score
//      }
// }




// for (var j=0; j<answer.length; j++) {
    // System.out.print(answerArray[j]);
// }





        

//     }
//      else {
//         document.querySelector("#win-counter").innerHTML = "Final Score: " + score;
//      }
//  }
function winScore(){
    document.querySelector("#win-counter").innerHTML = incScore
    if( incScore < 0) {
       incScore = 0
    }
}

function loseScore() {
    document.querySelector("#loss-counter").innerHTML = decScore
    if(decScore < 0 ) {
        decScore = 0
    }
}
function updateGuesses() {
    document.querySelector("#guesses-left").innerHTML = guesses 
    if(guesses < 0) {
        guesses = 0
    }
}


// updateScore();

// var wordBlanks = $("#word-blanks"); 


//renderQuestion()



 document.onkeyup = function(event) {
    //  if (questionIndex === answer.length) {
        // return;
    // }
    var userInput = String.fromCharCode(event.which).toLowerCase();

    if(remainingLetters === 0){
        alert("You win!")
        incScore++
        winScore()
        return
    }

    if(guesses===0){
        alert("You lose!")
        decScore++
        loseScore()
        return
    }
    

// //for (var i=0; i<correctAnswers.length; i++) {
  
//input characters to underscore
    if (alphabet.indexOf(userInput) > -1) {
        guesses--
        updateGuesses()

    var index = alphabet.indexOf(userInput);
    if (index >= 0) {
    alphabet.splice( index, 1 );}


        
       if (answer.indexOf(userInput) > -1) {
          
        for (var j=0; j<answer.length; j++) {
            if (answer[j] === userInput) {
                answerArray[j] = userInput;
                document.getElementById("word-blanks").innerHTML = answerArray
                remainingLetters--
                
            
                
            }}
           
        // if (userInput === answer[i]) {
            // var str= document.getElementById("word-blanks").innerHTML
           // var res = str.replace(answerArray[i], userInput)
            // document.getElementById("word-blanks").innerHTML = res
        
            
            
            // updateScore()
           console.log("it is correct")

            }
        
        else {
           var newDiv = $("<div>" + "wrong:" + userInput +  "</div>")
           $("#wrong-guesses").append(newDiv)
           
           loseScore()

        }
        questionIndex++
     }}
    
    //renderQuestion()
    


        // questionIndex++;
        //renderQuestion();
    
        

       
   
    




    //if ((userText == "h") || (userText == "o") || (userText == "n") || (userText == "d") || (userText == "a")) {
       // var answer = str.replace("_", 'h,o,n,d,a' )
       // document.write(answer)
