let color, height, width;

function main() {
	color = $("#color-picker").val();
	height = $("#grid-height").val();
	width = $("#grid-width").val();

	$("#color-picker").on("change", function () {
		color = $(this).val();
	});

	$("#grid-height").on("change", function () {
		height = $(this).val();
	});

	$("#grid-width").on("change", function () {
		width = $(this).val();
	});

	// When size is submitted by the user, call makeGrid()
	$('#grid-form').submit(function (event) {
		event.preventDefault();
		makeGrid();
	})

}

function makeGrid() {
	$('#grid-table').empty();

	for (var row = 0; row < height; row++) {
		let newTr = $('<tr>');
		for (var col = 0; col < width; col++) {
			let newTd = $('<td>');
			newTr.append(newTd);
		}
		$('#grid-table').append(newTr);
	}

	let isMouseDown = false;

	$('td').mousedown(function () {
		isMouseDown = true;
		$(this).css('background-color', color);
	});

	$('body').mouseup(function () {
		isMouseDown = false;
	});

	$('td').mouseover(function () {
		if (isMouseDown)
			$(this).css('background-color', color);
	});

}

main();

// var tdTags = document.getElementsByTagName('td')
// tdTags[0].onmousedown = function () {
// 	this.style.backgroundColor = color;
// }
///////////////////////////////////// 
// var colorJs = document.querySelector("#color-picker").value;
// var colorJs2 = document.getElementById("color-picker").value;
// console.log(color, colorJs, colorJs2);
//document.querySelector("#color-picker").onchange = function () {}
