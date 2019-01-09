$( document ).ready(function() {
		console.log( "ready!" );
});


let expandImages = function () {
console.log( "ready!" );
	var images = document.getElementsByClassName('panel');

	for (let i = 0; i < images.length; i++) {
images[i].addEventListener('click', function () {

	if (this.classList.contains('animation-open')) {
			this.classList.remove('animation-open');
					this.classList.add('animation-close');

	} else if (this.classList.contains('animation-close')) {
	this.classList.remove('animation-close');
		this.classList.add('animation-open');

	} else {
			this.classList.add('animation-open')
	}

	// if (this.children[0].classList.contains('animation-open')) {
	// 		this.children[0].classList.remove('animation-open');
	// 		this.children[0].classList.toggle('animation-close');
	//
	// } else {
	// 	this.children[0].classList.toggle('animation-open')
	//
	// }



	// this.children[0].classList.toggle('animation-open');
	// this.children[1].classList.toggle('hiddentext-show');




})
	}
}



expandImages()


//5-6/1 - continue this!text over background img
