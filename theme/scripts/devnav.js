var devtoolsicon = document.getElementById('devtoolsicon');
var devnav = document.getElementById('devnav');
devnav.open = false;

function showdevnav(action) {
	if (action == null) {
		action = !devnav.open
	}
	if (action) {
		devtoolsicon.className = 'active glyphicon glyphicon-remove';
		devnav.className = 'active';
		devnav.open = true;
	} else {
		devtoolsicon.className = 'glyphicon glyphicon-th';
		devnav.className = '';
		devnav.open = false;
	}
}
document.onscroll = function() {
	showdevnav(false);
}
document.onclick = function(e) {
	if (e.pageY > devnav.getBoundingClientRect().bottom) {
		showdevnav(false);
	}
}