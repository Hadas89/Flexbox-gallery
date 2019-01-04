$( document ).ready(function() {
		console.log( "ready!" );
});

//, 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 'images/11.jpg', 'images/12.jpg'

var createGallery = function () {
	imgArray = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg','images/4.jpg', 'images/5.jpg','images/6.jpg']

	for (var i = 0; i < imgArray.length; i++) {
		 var imgChild = document.createElement('img');

		document.querySelector('.gallery').appendChild(imgChild);
			imgChild.src = imgArray[i];
			imgChild.addEventListener('click', function () {
			 this.classList.toggle('expand');



			})

	}

}();
