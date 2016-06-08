var checkDraw = true; //toggle var for mouseover drawing
var drawRainbow = false; //toggle for rainbow colors
var shadeDraw = false; //toggle for shading draw
var size = 32; //init size of grid 

$(document).ready(function () {
	newGrid(size);
});

$(document).on('mouseover', '.gridunit', function() { //drawing function
	if (!checkDraw) return; // checks if you want to draw
	if (drawRainbow) { //rainbow draw
		var r1 = Math.floor(Math.random()*255);
		var r2 = Math.floor(Math.random()*255);
		var r3 = Math.floor(Math.random()*255);
		$(this).css('background-color',  rgb(r1, r2, r3));
	}
	else if (shadeDraw) { //shading black drawing
		var opacity = $(this).css("opacity");
		$(this).css('opacity', (opacity > 0.1) ? (opacity - 0.1) : opacity );
	}
	else {
		$(this).css('background-color',  'black');
	}
});

$(document).on('click', '#button', function() { //asks for user input, then creates grid dependent on user input
	var size = prompt("Type the size of your grid:");
	clearGrid();
	newGrid(size);
	changeGridUnit(size);
});

$(document).on('click', '#resetbutton', function() { //creates new grid
	clearGrid();
	newGrid(size);
});

$(document).on('click', '#rainbowbutton', function() { //rainbow toggle
	drawRainbow = !drawRainbow;
	shadeDraw = false;
});

$(document).on('click', '#shadebutton', function() { //shade toggle
	shadeDraw = !shadeDraw;
	drawRainbow = false;
});

$(document).on('click', '.gridunit', function() { //draw toggle
	checkDraw = !checkDraw;
});

var clearGrid = function () {
	$('#grid').empty();
}

var changeGridUnit = function (size) {
	var change = 640/size;
	$('.gridunit').css('height', change);
	$('.gridunit').css('width', change);
}

var newGrid = function (size) {
	for (var i = 0, count = size*size; i < count; ++i) {
		var box = $('<div class="gridunit"></div>');
		box.appendTo('#grid');
	}
};

var rgb = function (r, g, b) {
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  return ("rgb("+r+","+g+","+b+")");
}