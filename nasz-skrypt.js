var carouselList = $(".carousel ul");
// // setTimeout(rotate, 2000);
// setInterval(rotate, 3000);
var currentIndex = 0;
var prevIndex = -1;
var singlePictureWidth  =$("img").width();
var numberOfPictures = $("img").length;
var buttonDiv = $(".buttons");
console.log(numberOfPictures);

//dynamiczna dlugosc listy 
carouselList.css('width', carouselWidth());
function carouselWidth() {
	var numberOfPictures = $('img').length;
	var singlePictureWidth  = $("img").width();
	var widthOfList = numberOfPictures*singlePictureWidth + 21;
	return widthOfList;
}



function moveSlideRight() {
	carouselList.animate({"margin-left": -1000}, 1000, moveFirstSlide);
	prevIndex = currentIndex;
	currentIndex++;
	if (currentIndex  > numberOfPictures - 1 )
		currentIndex  = 0;		
	applyColor();
}	

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}

function moveSlideLeft() {
	moveFirstSlide1(); 
	carouselList.animate({"margin-left": 0}, 1000);	
	prevIndex = currentIndex;
	currentIndex--;
	if (currentIndex < 0 ) 
 	currentIndex = numberOfPictures -1;
	applyColor();
}

function moveFirstSlide1(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.insertBefore(firstItem);
	carouselList.css({marginLeft: -1000});
}
function applyColor() {
	var currentButton = document.getElementById(currentIndex + ""); //trick javascript string
	var prevButton = document.getElementById(prevIndex + "");
	currentButton.classList.add('red-color');
	if (prevButton) prevButton.classList.remove('red-color');
}

	$("#right").click(function() {moveSlideRight();}
);		


	$("#left").click(function() {moveSlideLeft();}
);	






for(i = 0; i < numberOfPictures; i++) {
	var icon = document.createElement('div');
	$(icon).addClass('my-circle');
	icon.setAttribute('id', i);
	buttonDiv.append(icon);
} 

applyColor();




