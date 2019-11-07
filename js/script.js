$("#shoot").click(function() {
var userChoice= $("#input").val();
$("#userChoice").text(userChoice);
var computerChoice= Math.random();


console.log(computerChoice);
if(computerChoice > 2/3){
$("#computerChoice").html("paper")

}
else if (computerChoice < 1/3){
$("#computerChoice").html("rock")
}
 else {
   $("#computerChoice").html("scissors")
 }
});


// DOCUMENT READY FUNCTION BELOW
