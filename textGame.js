var intro = "Hello there! You are in a room.";
var roomNorth = "You are facing north.";
var roomSouth = "You are facing south.";
var roomEast = "You are facing east.";
var roomWest = "You are facing west.";
var continueOn = jQuery.Event( "keydown", { keyCode: 13 } );

$(document).ready(function(){
    $('#output').text(intro);
})
$('input').on(continueOn,function(){
	if (input === "n"){
		$('#output').text(roomNorth);
	}
})