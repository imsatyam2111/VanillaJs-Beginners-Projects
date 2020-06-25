
// initialise score counter on window load
window.onload= function(){
    $("#userScore").text("You: 0");
    $("#compScore").text("Computer: 0");
}


const modal = $("#myModal");     //get the modal

// getting Rock, Paper and Scissor buttons
const rock = $(".rock");        //get the rock button
const paper = $(".paper");      //get the paper button
const scissor = $(".scissor");  //get the scissor button
const iconUser = $("#iconUser");      // get the element to append user choosed icon

// User's Choice
const userRock = '<i class="fas fa-hand-rock"></i>';                         // user rock
const userPaper = '<i class="fas fa-hand-paper"></i>';                       // user paper
const userScissor = '<i class="fas fa-hand-scissors fa-rotate-90" ></i>'     // user scissor

// Computer's Choice
const compRock= '<span class="far fa-hand-rock"></span>';                        //computer rock 
const compPaper= '<span class="far fa-hand-paper"></span>';                      //computer paper
const compScissor = '<span class="far fa-hand-scissors fa-rotate-90"></span>';   //computer scissor
var arr = [compRock,compPaper,compScissor];          //storing above icons in array


var btn = $(".button");               //get all of three(rock, paper, scissor) buttons
const iconComp = $("#iconComp");     //get the element to append computer choosed icon   


// Computer plays its turn
btn.click(function(){
    modal.css("display","block",);     // display the modal 
    
    var randomNum;
    randomNum = Math.floor(Math.random() * (3-0)) + 0;  // it will generate random number between 0 to 3
    iconComp.append(arr[randomNum]);                    // append computer choosed icon
})

var countUser = 0,countComp = 0;                       // Score counter

// add rock to inside the modal when choosed and determine result
rock.click(function(){
    iconUser.append(userRock);
    //alert(iconComp.html())
    //alert(iconUser.html())
    if(iconComp.html() == compRock){
        $("#result").append('<h2 class="text-secondary text-center">It\'s a Draw</h2><p class="text-center">Computer choosed Rock</p>');
    }
    else if(iconComp.html() == compPaper){
        $("#result").append('<h2 class="text-danger text-center">You Lost</h2><p class="text-center">Computer choosed Paper</p>');
        countComp = countComp + 1;
        $("#compScore").text("Computer " + countComp);
    }
    else if(iconComp.html() == compScissor){
        $("#result").append('<h2 class="text-success text-center">You Won</h2><p class="text-center">Computer choosed Scissor</p>');
        countUser = countUser + 1;
        $("#userScore").text("You: " + countUser);
    }
});

// add paper inside the modal when choosed and determine result
paper.click(function(){
    iconUser.append(userPaper);

    if(iconComp.html() == compRock){
        $("#result").append('<h2 class="text-success text-center">You Won</h2><p class="text-center">Computer choosed rock</p>');
        countUser = countUser + 1;
        $("#userScore").text("You: " + countUser);
    }
    else if(iconComp.html() == compPaper){
        $("#result").append('<h2 class="text-secondary text-center">It\'s a Draw</h2><p class="text-center">Computer choosed Paper</p>');

    }
    else if(iconComp.html() == compScissor){
        $("#result").append('<h2 class="text-danger text-center">You Lost</h2><p class="text-center">Computer choosed Scissor</p>');
        countComp = countComp + 1;
        $("#compScore").text("Computer " + countComp);
    }
});

// add scissor inside the modal when choosed and determine result
scissor.click(function(){
    iconUser.append(userScissor);

    if(iconComp.html() == compRock){
        $("#result").append('<h2 class="text-danger text-center">You Lost</h2><p class="text-center">Computer choosed Rock</p>');
        countComp = countComp + 1;
        $("#compScore").text("Computer " + countComp);
        
    }
    else if(iconComp.html() == compPaper){
        $("#result").append('<h2 class="text-success text-center">You Won</h2><p class="text-center">Computer choosed Paper</p>');
        countUser = countUser + 1;
        $("#userScore").text("You: " + countUser);
    }
    else if(iconComp.html() == compScissor){
        $("#result").append('<h2 class="text-secondary text-center">It\'s a Draw</h2><p class="text-center">Computer choosed Scissor</p>');
        
    }
});
    

// Hide modal 
$(".close").click(function(){
    modal.css("display","none");        // funtion to close the modal and clear icon
    iconUser.empty();                   // Remove User choosed Icon
    iconComp.empty();                   // Remove Computer choosed Icon
    $("#result").empty();               // Clear's the result container
});

// sets the scorecard to its initial value
$(".restart").click(function(){
    countUser = 0;                      
    countComp = 0;
    $("#userScore").text("You: 0");
    $("#compScore").text("Computer: 0");
})
