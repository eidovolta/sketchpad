$(document).ready(function () {
	for (var i = 0; i < 32; i++) {
		for (var j = 0; j < 32; j ++) {
			var box = $('<div class="gridunit"></div>');
			box.appendTo('#grid');
		}
	}
});

$(document).on('mouseover', '.gridunit', function() {
	var newColor = Math.random()*255;
	$(this).css('background-color', "black");
});

$(document).on('click', '#button', function() {
	var size = prompt("Type the size of your grid:")
	clearGrid();
	newGrid(size)
	changeGridUnit(size);
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
	for (var i = 0; i < size*size; i++) {
		var box = $('<div class="gridunit"></div>');
		box.appendTo('#grid');
	}
};