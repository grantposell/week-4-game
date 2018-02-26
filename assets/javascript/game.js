//Setting the variables
var random_result;
var lost;
var win;
var num=0;
var random;
var crystal;

//Generating the random result for the target value

random_result = Math.floor(Math.random() * 102) + 19;//
$(".result").html('Target: ' + random_result);


for(var i = 1; i < 5; i++){
    random= Math.floor(Math.random()* 11) + 1;
    console.log(random);

     crystal = $("#crys" +i).attr(
        "data-random", random
    )[0];
  
    // $(".crystals").append(crystal);
}

$(".items").on('click', function () {
    console.log($(this).children().attr('data-random'));
     num =  parseInt($(this).children().attr('data-random'));
    console.log(num);
});
//Pseudo Code

//A game with 4 crystals and random result.
//Every crystal needs to have a random number between 1 - 12.
//A new random number should be generated every single time we win or lose to those crystals.
//When clicking any crystal, it should add with the previous result until it equals the total score.
//If it is greater than random result, we decrement a lost counter 
//If it is equal, then we make the win counter increase.