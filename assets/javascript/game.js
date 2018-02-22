var random_result;
var lost;
var win;


random_result = Math.floor(Math.random() * 60) + 30;//
$("result").html('Random Result: ' + random_result);


for(var i = 0; i < 4; i++){
    var random= Math.floor(Math.random()* 11) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystals',
        "data-random": random
    });

    $(".crystals").append(crystal);
}

$(".crystal").on('click', function () {
});
//Pseudo Code

//A game with 4 crystals and random result.
//Every crystal needs to have a random number between 1 - 12.
//A new random number should be generated every single time we win or lose to those crystals.
//When clicking any crystal, it should add with the previous result until it equals the total score.
//If it is greater than random result, we decrement a lost counter 
//If it is equal, then we make the win counter increase.