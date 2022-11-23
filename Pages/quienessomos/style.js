const menu = document.getElementById('jsMenu');
const menuIcon = document.getElementById('jsMenuIcon');
const content = document.querySelectorAll(".notificacion")[0];
var coordX = 0;
var coordY = 0;

const removeBlur = () => {
	content.classList.remove('shadow');
}

addEventListener
	coordX = e.targetTouches[0].pageX;
	coordY = e.targetTouches[0].pageY;
});

addEventListener('touchmove', (e)=> { 
	var touch = e.targetTouches[0];
	if((touch.pageX > coordX ) && (touch.pageY > coordY-5) && (touch.pageY < coordY+5)){
		/El swipe se genera hacia la derecha/
		menu.classList.add('menu--show');
		content.classList.add('shadow');
	}
	if((touch.pageX < coordX)){
		/El swipe se genera hacia la izquierda/
		menu.classList.remove('menu--show');
		removeBlur();
	}
});

addEventListener('click', (e)=> {
	if(e.target.id === 'jsMenuIcon'){
		menu.classList.toggle('menu--show');
		content.classList.toggle('shadow');
	}
	else{
		menu.classList.remove('menu--show');
		removeBlur();
	}
});
('touchstart', (e)=> {