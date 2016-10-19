function gradeQuiz(){
    
    var userScore = 0;
    
    var answerOne = document.querySelector('input[name ="q1"]').value;
    console.log("You wrote " + answerOne);
    
    if (answerOne == "Barack Obama") {
        userScore += 5;
    
    } else  {
        console.log("The answer is, <b>Barack Obama</b>");
        document.querySelector(".responseOne").innerHTML = "The answer is, Barack Obama";
        
        var answerTwo = document.querySelector('input[name ="q2"]').value;
        console.log("You wrote " + answerTwo);
        
    if (answerTwo == "Washington D.C.") {
            userScore += 5;
         
    } else if {
         console.log("The answer is, <b>Washington D.C.</b>");
         document.querySelector(".responseTwo").innerHTML = "The answer is, Washington D.C.";
         
         var answerThree = document.querySelector('input[name ="q3"]').value;
         console.log("You wrote " + answerThree);
         
   if (answerThree == "n/a") {
       userScore += 5;
         
     } else if  {
         console.log("The answer is, <b>n/a</b>");
         document.querySelector(".responseThree").innerHTML = "The answer is, n/a";
         
         var answerFour = document.querySelector('input[name = "q4"]').value;
         console.log("You wrote " + answerFour);
     
     if (answerFour == "South Dakota") {
         userScore += 5;
     
     } else if {
         console.log("The answer is,<b>South Dakota</b>");
         document.querySelector(".responseFour").innerHTML = "The answe is, South Dakota";
         
         var answerFive = document.querySelector('input[name = "q5"]').value;
         console.log("You wrote " + answerFive);
         
         if (answerFive == "a lot") {
             userScore +=5;
             
         } else if {
             console.log("The answer is, <b>a lot</b>.");
             document.querySelector(".responseFive").innerHTML = "The answer is, a lot.";
             
             var answerSix = document.querySelector('input[name = "q6"]').value;
             console.log("You wrote " + answerSix);
             
        if (answerSix == "none"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>none</b>.");
             document.querySelector(".responseSix").innerHTML = "The answer is, none."
             
             var answerSeven = document.querySelector('input[name = "q7"]').value;
             console.log("You wrote " + answerSeven);
             
        if (answerSeven == "very long"); {
            userScore += 5;
            
        } else if {
            console.log("The answer is, <b>very long</b>.");
            document.querySelector(".responseSeven").innerHTML = "The answer is, very long.";
           
             var answerEight = document.querySelector('input[name = "q8"]').value;
             console.log("You wrote " + answerEight);
             
        if (answerEight == "who knows"); {
            userScore += 5;
            
        } else if {
            console.log("The answer is, <b>who knows</b>.");
            document.querySelector(".responseEight").innerHTML = "The answer is, who knows.";
            
             var answerNine = document.querySelector('input[name = "q9"]').value;
             console.log("You wrote " + answerNine);
             
        if (answerNine == "Walt Disney's imagination"); {
            userScore += 5;
            
        } else if {
            console.log("The answer is, <b>Walt Disney's imagination</b>.");
            document.querySelector(".responseNine").innerHTML = "The answer is Walt Disney's, imagination.";
    
          var answerTen = document.querySelector('input[name = "q10).value;
             console.log("You wrote " + answerTen);
             
        if (answerTen == N/A); {
            userScore += 5;
            
        } else if {
            console.log("The answer is, <b>n/a</b>");
            document.querySelector(".responseTen").innerHTML = "The answer is, n/a.";
            
            var answerEleven = document.querySelector('input[name = "q11"]').value;
             console.log("You wrote " + answerEleven);
             
        if (answerEleven == "a baby"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>a baby</b>.");
             document.querySelector(".responseEleven").innerHTML = "The answer is, a baby.";
             
             var answerTwelve = document.querySelector('input[name = "q12"]').value;
             console.log("You wrote " + answerTwelve);
             
        if (answerTwelve == "a lot"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>a lot</b>.");
             document.querySelector(".responseTwelve").innerHTML = "The answer is; a lot.";
             
             var answerThirteen = document.querySelector('input[name = "q13"]').value;
             console.log("You wrote " + answerThirteen);
             
        if (answerThirteen == "not in America"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>not in America</b>.");
             document.querySelector(".responseThirteen").innerHTML = "The answer is, not in America.";
             
             var answerFourteen = document.querySelector('input[name = "q14"]').value;
             console.log("You wrote " + answerFourteen);
             
        if (answerFourteen == "1 pm"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>1 pm</b>.");
             document.querySelector(".responseFourteen").innerHTML = "The answer is, 1 pm.";
             
             var answerFifteen = document.querySelector('input[name = "q15"]').value;
             console.log("You wrote " + answerFifteen);
             
        if (answerFifteen == "none"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>none</b>.");
             document.querySelector(".responseFifteen").innerHTML = "The answer is, none.";
             
             var answerSixteen = document.querySelector('input[name = "q16"]').value;
             console.log("You wrote " + answerSixteen);
             
        if (answerSixteen == "you can't"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>you can't</b>.");
             document.querySelector(".responseSixteen").innerHTML = "The answer is, you can't.";
             
             var answerSeventeen = document.querySelector('input[name = "q17"]').value;
             console.log("You wrote " + answerSeventeen);
             
        if (answerSeventeen == "on a street"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>on a street</b>.");
             document.querySelector(".responseSeventeen").innerHTML = "The answer is, on a street.";
             
             var answerEighteen = document.querySelector('input[name = "q18"]').value;
             console.log("You wrote " + answerEighteen);
             
        if (answerEighteen == "50"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>50</b>.");
             document.querySelector(".responseEighteen").innerHTML = "The answer is, 50.";
             
             var answerNineteen = document.querySelector('input[name = "q19"]').value;
             console.log("You wrote " + answerNineteen);
             
        if (answerNineteen == "yes"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>who cares</b>.");
             document.querySelector(".responseNineteen").innerHTML = "The answer is, who cares.";
             
                if (answerNineteen == "no"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>who cares</b>.");
             document.querySelector(".responseNineteen").innerHTML = "The answer is, who cares.";
             
             var answerTwenty = document.querySelector('input[name = "q20"]').value;
             console.log("You wrote " + answerTwenty);
             
        if (answerTwenty == "yes"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>good for you</b>.");
             document.querySelector(".responseTwenty").innerHTML = "The answer is, good for you.";
         }
             
        if (answerTwenty == "no"); {
            userScore += 5;
            
         } else if {
             console.log("The answer is, <b>I figured</b>.");
             document.querySelector(".responseTwenty").innerHTML = "The answer is, I figured.";
         }
     
         
    
    console.log("Your current score is " + userScore);
    
    if (userScore == 100){
        document.write("You Passed");
        
    } else if (userScore == 95){
        document.write("You Passed");
        
    } else if (userScore == 90){
        document.write("You Passed");
        
    } else if (userScore == 85){
        document.write("You Passed");
        
    } else if (userScore == 80){
        document.write("You Passed");
        
    } else if (userScore == 75){
        document.write("You Barely Passed");
        
    } else if (userScore == 70){
        document.write("You Barely Passed");
        
    } else if (userScore == 65){
        document.write("Come on Man!");
        
    } else if (userScore == 60){
        document.write("Not Looking Good At All!");
        
    } else if (userScore == 55){
        document.write("This is getting ridiculous!");
        
    } else if (userScore == 50){
        document.write("Who are you!");
        
    } else if (userScore == 45){
        document.write("You should be ashamed of yourself!");
        
    } else if (userScore == 40){
        document.write("REALLY!");
        
    } else if (userScore == 35){
        document.write("REALLY");
        
    } else if (userScore == 30){
        document.write("It might be time to move.");
        
    } else if (userScore == 25){
        document.write("Where at you from?");
        
    } else if (userScore == 20){
        document.wirte ("Seriously, where are you from?");
        
    } else if (userScore == 15){
        document.write("OMG!!!");
        
    }  else if (userScore == 10){
        document.write("Just quit!");
        
    } else if (userScore == 5){
        document.write("Can it get any worse?");
        
    } if (userScore == 0){
        document.write("This is unAmerican.");
    }
        
}