$(document).ready(function(){
  drawSketchpad(16);

});

function drawSketchpad(size) {
	 var newBox = document.createElement("TABLE");
    newBox.setAttribute("id", "boxes");
    var element = document.getElementById("pad");
	element.appendChild(newBox);
	
//colums	
	for (var i = 0; i < size; i++) {
var parentBox = document.getElementById("boxes");
var includeTr = document.createElement('tr');
includeTr.setAttribute("class", "row");
parentBox.appendChild(includeTr);  
  
//rows
for (var x = 0; x < size; x++) {
var parentRow = document.getElementsByClassName('row');
var includeTd = document.createElement('td');
includeTd.setAttribute("class", "line");
includeTr.appendChild(includeTd);  	
}	
}
	}



//button
$(document).ready(function(){
    $("#button").click(function(){
   var user = parseInt(prompt("Please give a number between 10 and 100"));
   
	if (isNaN(user) || user < 10 || user > 100) {
		user = parseInt(prompt("Please enter a number between 10 and 100", "50")); }
	else {
    $("#boxes").remove();
	drawSketchpad(user); 
	$(".line").hover(function(){
    $(this).css("background-color", "black");
    });
	}
    });
});

//sketchpad background when hovering
$(document).ready(function(){
$(".line").hover(function(){
    $(this).css("background-color", "black");
    });
});



