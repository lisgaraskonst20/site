/* header-sticky-scroll */
window.onscroll = function() {stickyscroll()};
var navbar = document.getElementById("navbar-div");
var sticky = navbar.offsetTop;
function stickyscroll() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

/* menu-button-transform */
function transform(x) {
	x.classList.toggle("change");
}

/* flags-cl-bw */
function flagcl1() {
	var cl = document.getElementById('flag1');
	cl.src = ("img/eng-flag.png")
}
function flagbw1() {
	var bw = document.getElementById('flag1');
	bw.src = ("img/eng-flag-bw.png")
}

function flagcl2() {
	var cl = document.getElementById('flag2');
	cl.src = ("img/gre-flag.png")
}
function flagbw2() {
	var bw = document.getElementById('flag2');
	bw.src = ("img/gre-flag-bw.png")
}

function flagcl3() {
	var cl = document.getElementById('flag3');
	cl.src = ("img/ger-flag.png")
}
function flagbw3() {
	var bw = document.getElementById('flag3');
	bw.src = ("img/ger-flag-bw.png")
}

function flagcl4() {
	var cl = document.getElementById('flag4');
	cl.src = ("img/chi-flag.png")
}
function flagbw4() {
	var bw = document.getElementById('flag4');
	bw.src = ("img/chi-flag-bw.png")
}

function flagcl5() {
	var cl = document.getElementById('flag5');
	cl.src = ("img/esp-flag.png")
}
function flagbw5() {
	var bw = document.getElementById('flag5');
	bw.src = ("img/esp-flag-bw.png")
}